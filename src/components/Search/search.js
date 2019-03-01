import React, {Component} from 'react';

import './search.css';

const Search = ({onSearch}) => {
    return (
      <div className="search">
        <input
          type="text"
          className="search__input"
          onChange={onSearch}
          defaultValue=""
          placeholder="Поиск по авто, названию, адресу, городу филиала"/>
      </div>
    )
};

export default Search;