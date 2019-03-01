import React, {Component} from 'react';
import Auto from '../Auto';

import './list-auto.css';

const ListAuto = ({items,userCoords}) => {


    const cars = items.map(el => {
      return (
        <div className="list-auto__item" key={el.id}>
          <Auto car={el} userCoords={userCoords}/>
        </div>
      );
    });

    return (
      <div className="list-auto">
        {cars}
      </div>
    )
}

export default ListAuto;