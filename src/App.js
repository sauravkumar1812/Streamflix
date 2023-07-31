import "./App.css";
const Person = (props) => {
  return (
    <>
      <h1>Name :{props.name} </h1>
      <h1>Last Name : {props.lastname} </h1>
      <h2>Age : {props.age}</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person name={"VISHAL"} lastname={"YADAV"} age={21} />
      <Person name={"SAURAV"} lastname={"KUMAR"} age={23} />
      <Person name={"AYUSH"} lastname={"SINGH"} age={22} />
    </div>
  );
};

export default App;
