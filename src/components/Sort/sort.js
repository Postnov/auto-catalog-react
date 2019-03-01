import React, {Component} from 'react';

import './sort.css';

const Sort = ({switchSearch}) => {

  return (
    <div class="sort">
      <span class="sort__title">Сортировать:</span>
      <label class="sort__input-item" >
          <input
            onChange={switchSearch}
            defaultChecked
            class="sort__input"
            type="radio"
            value="price"
            name="sort"/>
          <span class="sort__label">По цене</span>
      </label>

      <label class="sort__input-item">
          <input
            onChange={switchSearch}
            class="sort__input"
            type="radio"
            value="distance"
            name="sort"/>
          <span class="sort__label">По удаленности</span>
      </label>
    </div>
  )
};

export default Sort;