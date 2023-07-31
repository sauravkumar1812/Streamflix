import { useState } from "react";
import "./App.css";

const App = () => {
  const  [counter,setCounter] = useState(0);
  return (
    <div className="App">
       <button onClick={()=>setCounter((prevCount)=>)}>-</button>
       <h1>
        {counter}
       </h1>
       <button onClick={()=>alert('clicked')}>+</button>
    </div>
  );
};

export default App;
