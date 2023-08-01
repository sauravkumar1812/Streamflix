import { useEffect } from "react";
// 9682e42a
const API_URL ='http://www.omdbapi.com?apikey= 9682e42a';

const App = () => {
  const searchMovies = async (title)=>{
   const response =await fetch(`${API_URL}&s=${title}`)
  }
  useEffect ( () => {
    
  },[]);
  return(
    <h1>HII</h1> 
  );
}

export default App;
  