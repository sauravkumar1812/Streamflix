import { useEffect } from "react";
// 9682e42a
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
    <h1>HII</h1> 
  );
}

export default App;
  