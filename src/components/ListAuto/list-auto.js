import React, {Component} from 'react';
import Auto from '../Auto';

import './list-auto.css';

const ListAuto = ({items}) => {


    const cars = items.map(el => {
      return (
        <div className="list-auto__item" key={el.id}>
          <Auto car={el}/>
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