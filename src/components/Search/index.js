import React from 'react';

import './index.css';

const Search = ({onSearchQuery}) => {
    return (
      <div className='search'>
        <input
          type='text'
          className='search__input'
          onChange={onSearchQuery}
          defaultValue=''
          placeholder='Поиск по авто, названию, адресу, городу филиала'/>
      </div>
    );
};

export default Search;
