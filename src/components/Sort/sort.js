import React, {Component} from 'react';

import './sort.css';

const Sort = () => {
    return (
      <div class="sort">
        <span class="sort__title">Сортировать:</span>
        <label class="sort__input-item" >
            <input
                checked
                class="sort__input"
                type="radio"
                name="sort"
                value="price" />
            <span class="sort__label">По цене</span>
        </label>

        <label class="sort__input-item">
            <input
                class="sort__input"
                type="radio"
                name="sort"
                value="distance" />
            <span class="sort__label">По удаленности</span>
        </label>
      </div>
    )
};

export default Sort;