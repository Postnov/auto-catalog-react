import React, {Component} from 'react';
import ListAuto from '../ListAuto';
import Sort from '../Sort';
import Search from '../Search';
import cars from '../../assets/cars';

import './app.css';
export default class App extends Component {


  state = {
    cars: cars || {}
  }

  render() {
    return (
      <div className="app">
        <ListAuto items={cars}/>
      </div>
    )
  }
}