import MyFirstApp from './Components/1st/firstcom';
import Second from "./Components/2nd/scndcom";
import './App.css';
let a="Umar Saeed";
function App() {
  return (

    <div className="App">
      <MyFirstApp abc={a}/>
      <Second/>
    </div>
  );
}

export default App;
