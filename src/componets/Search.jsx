import React from 'react';
import './Search.css';

function Search({ queryString, onQuery }) {
  return (

    <form action="" className='search-form'>
      <input type="search" name="userName" id="userName" placeholder='search a name...' value={queryString} onChange={(e) => onQuery(e.target.value)} /></form>

  );
}

export default Search;