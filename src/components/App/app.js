import React, {Component} from 'react';
import ListAuto from '../ListAuto';
import Sort from '../Sort';
import Search from '../Search';
import cars from '../../assets/cars';

import './app.css';
export default class App extends Component {


  state = {
    cars: cars || {},
    userCoords: ['55.7536232', '37.6199775']
  };

  setDialerDistance = (distance, carId) => {
    let {cars} = this.state;

    let newCars = cars.map(el => {
      let item = el;
      if (item.id === carId) item.dealer.distance = distance;
      return el;
    });

    this.setState({cars: newCars});
  };

  render() {
    let {cars, userCoords} = this.state;
    return (
      <div className="app">

        <div className="app__top-panel">
          <Sort />
          <Search />
        </div>

        <ListAuto
          items={cars}
          userCoords={userCoords}
          setDialerDistance={this.setDialerDistance}/>
      </div>
    )
  }
}