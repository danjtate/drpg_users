import React, { useState } from "react";
import './css/search.css';

const SearchBar = () => {
    const [name, setName] = useState(" ");

    const handleInput = event => {
        setName(event.target.value);
      };
    
      const search = () => {
        console.log(name);
      };

      const handleKeyDown = event => {
        if (event.key === 'Enter') {
          setName(event.target.value);
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
