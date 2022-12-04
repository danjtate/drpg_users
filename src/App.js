
import './App.css';
import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import GetAllUsers from './components/GetAllUsers';

function App() {
  
  return (
    <div className="App">
      <Header title='Users'/>
      <SearchBar />
      <GetAllUsers />
    </div>
  );
}

export default App;
