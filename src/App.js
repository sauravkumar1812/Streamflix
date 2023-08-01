import { useEffect } from "react";
// 9682e42a
import './App.css';
import SearchIcon from './search.svg';
const API_URL ="http://www.omdbapi.com?apikey=9682e42a";

const App = () => {

  const searchMovies = async (title)=>{
   const response =await fetch(`${API_URL}&s=${title}`);
   const data  =await response.json();

   console.log(data.Search);
  }
  useEffect ( () => {
    searchMovies('Spiderman');
  },[]);
  return(
    <div className="app">
      <h1>StreamFlix</h1>
    </div>
  );
}

export default App;
  