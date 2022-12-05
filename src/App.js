
import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import GetAllUsers from './components/GetAllUsers';

function App() {
  const [searchTerm, setSearchTerm] = useState(" ");

  const handleSearch = searchTerm => {
    setSearchTerm(searchTerm)
  }
  
  return (
    <div className="App">
      <Header title='Users'/>
      <SearchBar handleSearch={handleSearch}/>
      <GetAllUsers searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
