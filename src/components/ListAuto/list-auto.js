import React, {Component} from 'react';
import Auto from '../Auto';
import Masonry from 'react-masonry-css';

import './list-auto.css';

const ListAuto = ({items,userCoords,setDialerDistance}) => {


    const cars = items.map(el => {
      return (
        <div className="list-auto__item" key={el.id}>
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

export default ListAuto;