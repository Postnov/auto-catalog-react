import React, {Component} from 'react';
import ListAuto from '../ListAuto';
import Sort from '../Sort';
import Search from '../Search';
import cars from '../../assets/cars';

import './app.css';
import { all } from 'q';
export default class App extends Component {


  state = {
    cars: cars || {},
    userCoords: ['55.7536232', '37.6199775'],
    filteredCars: cars
  };

  setDialerDistance = (distance, carId) => {
    let {cars} = this.state;

    let newCars = cars.map(el => {
      let item = el;
      if (item.id === carId) item.distance = distance;
      return item;
    });

    this.setState({cars: newCars});
  };


  switchSearch = (e) => {
    let filter = e.target.value;
    let filteredCars = cars.slice().sort((a,b) => a[filter] - b[filter]);

    this.setState({filteredCars});
  };

  onSearch = (e) => {
    let searchQuery = e.target.value;

    let filteredCars = cars.filter(el => {
      let {
        model_name:modelName = '',
        kit_name:kitName = '',
        dealer: {
          address,
          city,
          name
        }
      } = el;

      let allValues = [modelName, kitName, address, city, name].join(' ');

      return allValues.toLowerCase().indexOf(searchQuery.toLowerCase) !== -1;
    });

    // this.setState({filteredCars});
  }

  render() {
    let {filteredCars, userCoords} = this.state;
    return (
      <div className="app">

        <div className="app__top-panel">
          <Sort switchSearch={this.switchSearch}/>
          <Search onSearch={this.onSearch}/>
        </div>

        <ListAuto
          items={filteredCars}
          userCoords={userCoords}
          setDialerDistance={this.setDialerDistance}/>
      </div>
    )
  }
}