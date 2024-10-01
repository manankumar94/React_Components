import logo from './logo.svg';
import './App.css';

function App() {
  let name="Manan Gautam";
  const gender="Female";
  return (
    <div className="App">
      <h2>Welcome to the react Lerning..</h2>
      <h3>Made By: {name}</h3>

      {/* we perform any js operation inside html tag here */}
      <div><h3>JS Operation inside HTML(10+20): {10+20}</h3></div>

      {/* Use of ternary operator */}
      { (gender==="Male") ?  <h3>Name is shown if gender is male {name} </h3>: <h3>Please pass correct gender(Male)</h3>}
     
    </div>
  );
}

export default App;
