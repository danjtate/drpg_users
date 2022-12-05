import React, { useState } from "react";
import './css/search.css';

const SearchBar = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState(" ");

    const handleInput = event => {
      setSearchTerm(event.target.value);
      };
    
      const search = () => {
        handleSearch(searchTerm)
        // console.log(searchTerm);
      };

      const handleKeyDown = event => {
        if (event.key === 'Enter') {
          setSearchTerm(event.target.value);
          search();
        }
      };

  return (
    <div className = 'search'>
        <input onChange={handleInput} onKeyDown={handleKeyDown} placeholder='Search for a User'></input>
        <button onClick={search}>Search</button>
      
    </div>
  )
}

export default SearchBar
