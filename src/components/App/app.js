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
  }

  render() {
    let {cars, userCoords} = this.state;
    return (
      <div className="app">
        <ListAuto items={cars} userCoords={userCoords}/>
      </div>
    )
  }
}