import React from 'react';

import './sort.css';

const Sort = ({onSortToggle}) => {

  return (
    <div className='sort'>
      <span className='sort__title'>Сортировать:</span>
      <label className='sort__input-item' >
          <input
            onChange={onSortToggle}
            defaultChecked
            className='sort__input'
            type='radio'
            value='price'
            name='sort'/>
          <span className='sort__label'>По цене</span>
      </label>

      <label className='sort__input-item'>
          <input
            onChange={onSortToggle}
            className='sort__input'
            type='radio'
            value='distance'
            name='sort'/>
          <span className='sort__label'>По удаленности</span>
      </label>
    </div>
  );
};

export default Sort;
