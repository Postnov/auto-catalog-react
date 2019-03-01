import React, {Component} from 'react';

import './search.css';

const Search = () => {
    return (
      <div class="search">
        <input
          type="text"
          class="search__input"
          placeholder="Поиск по авто, названию, адресу, городу филиала"/>
      </div>
    )
};

export default Search;