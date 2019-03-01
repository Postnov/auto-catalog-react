import React, {Component} from 'react';
import Auto from '../Auto';
import Masonry from 'react-masonry-css';

import './list-auto.css';

export default class ListAuto extends Component {
  state = {
    minHeight: 0
  };

  componentDidMount() {
    window.addEventListener('load', () => {
      let listItems = Object.values(this.refs).map(el => el.offsetHeight),
          minHeight = Math.max.apply(null, listItems);

      this.setState({minHeight});
    });
  };

  render() {
    let {items,userCoords,setDialerDistance} = this.props,
        {minHeight} = this.state;

    const cars = items.map(el => {
      return (
        <div
          className="list-auto__item"
          key={el.id}
          ref={'auto'+ el.id}
          style={{minHeight: minHeight + 'px'}}>

          <Auto
            car={el}
            userCoords={userCoords}
            setDialerDistance={setDialerDistance}/>
        </div>
      );
    });

    if (cars.length) {
      return (
        <Masonry
          breakpointCols={{default: 4, 1100: 3, 700: 2, 500: 1}}
          className="masonry-grid"
          columnClassName="masonry-grid__col">
          {cars}
        </Masonry>
      );
    }else {
      return (
        <p class="list-auto__empty">
          По вашему запросу автомобили не найдены. Измените или очистите запрос.
        </p>
      );
    };
  };
};
