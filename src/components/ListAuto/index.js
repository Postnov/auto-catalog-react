import React, {Component} from 'react';
import Auto from '../Auto';
import Masonry from 'react-masonry-css';
import getDistance from '../../utils/getDistance';

import './index.css';

export default class ListAuto extends Component {
  state = {
    minHeight: 0,
    items: this.props.items
  };

  setItemsDistance() {
    let items = this.props.items.slice();

    items.map(el => {
      let {dealer: {latitude = null, longitude = null} = {}} = el;
      let [userLat, userLon] = this.props.userCoords;

      if (latitude && longitude) {
        el.distance = getDistance(latitude, longitude, userLat, userLon).toFixed(1);
      }
      return el;
    });

    this.props.setDialerDistance(items);
  };

  componentDidMount() {
    // count and set item distance
    this.setItemsDistance();

    // calculation max height from equal item height
    window.addEventListener('load', () => {
      // get only html node
      let items = Object.values(this.refs)
        .filter(el => !el.props)
        .map(el => el.offsetHeight);

      let minHeight = Math.max.apply(null, items);

      this.setState({minHeight});
    });
  };

  componentWillUnmount() {
    window.removeEventListener('load');
  }

  render() {
    let {items, minHeight} = this.state;

    const cars = items.map(el => {
      return (
        <div
          className='list-auto__item'
          key={el.id}
          ref={'auto-html-tag'+ el.id}
          style={{minHeight: minHeight + 'px'}}>

          <Auto
            ref={'auto-component'+ el.id}
            car={el}/>
        </div>
      );
    });

    if (cars.length) {
      return (
        <Masonry
          breakpointCols={{default: 4, 1100: 3, 700: 2, 500: 1}}
          className='masonry-grid'
          columnClassName='masonry-grid__col'>
          {cars}
        </Masonry>
      );
    }else {
      return (
        <p class='list-auto__empty'>
          По вашему запросу автомобили не найдены. Измените или очистите запрос.
        </p>
      );
    };
  };
};
