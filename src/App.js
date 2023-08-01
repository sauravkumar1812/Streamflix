import { useEffect, useState } from "react";
import MovieCard from "./moviecard";
// 9682e42a
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=9682e42a";
const movie1 ={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}


const App = () => {
   const [movies ,setMovies] =useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    searchMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>StreamFlix</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img
        src={SearchIcon} 
        alt="search"
        onClick={()=>{}}
        />
      </div>
      <div className="container">
      <MovieCard movie1={movies[0]}/>
      </div>
    </div>
  );
};

export default App;
