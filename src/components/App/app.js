import React, {Component} from 'react';
import ListAuto from '../ListAuto';
import Sort from '../Sort';
import Search from '../Search';
import cars from '../../assets/cars';

import './app.css';
export default class App extends Component {


  state = {
    cars: cars || {},
    userCoords: ['55.7536232', '37.6199775'],
    filteredCars: cars,
    query: '',
    filter: 'price'
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

  onSortToggle = (e) => {
    let cars = this.state.cars.slice();
    cars = this.searchFilter(cars, this.state.query);

    this.setState({
      filter: e.target.value,
      filteredCars: this.switchSort(cars, e.target.value)
    });
  };

  onSearchQuery = (e) => {
    let cars = this.state.cars.slice();
    cars = this.switchSort(cars, this.state.filter);

    this.setState({
      query: e.target.value,
      filteredCars: this.searchFilter(cars, e.target.value)
    });
  };

  switchSort = (items, type) => items.slice().sort((a,b) => a[type] - b[type]);

  searchFilter = (items, query) => {
    let filteredCars = items.filter(el => {
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

      return allValues.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    return filteredCars;
  }

  render() {
    let {filteredCars, userCoords} = this.state;

    return (
      <div className="app">
        <div className="app__top-panel">
          <Sort onSortToggle={this.onSortToggle}/>
          <Search onSearchQuery={this.onSearchQuery}/>
        </div>

        <ListAuto
          items={filteredCars}
          userCoords={userCoords}
          setDialerDistance={this.setDialerDistance}/>
      </div>
    );
  };
};
