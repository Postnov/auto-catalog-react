import React, {Component} from 'react';
import Auto from '../Auto';
import Masonry from 'react-masonry-css';

import './list-auto.css';

export default class ListAuto extends Component {

  state = {
    minHeight: 0
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      let listItems = Object.values(this.refs),
          arrHeight = listItems.map(el => el.offsetHeight),
          minHeight = Math.max.apply(null, arrHeight);

      this.setState({minHeight})
    });

  }

  render() {
    let {items,userCoords,setDialerDistance} = this.props;
    let {minHeight} = this.state;

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

    return (
      <Masonry
        breakpointCols={{default: 4, 1100: 3, 700: 2, 500: 1}}
        className="masonry-grid"
        columnClassName="masonry-grid__col">
        {cars}
      </Masonry>
    )
  }

}
