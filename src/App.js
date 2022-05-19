import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'
const name = "Rifat"
const App = () => {
  const [counter, setCounter] = useState(0)
  
  // function DecreaseValue() {
  //   setCounter  ({
  //     prevcount => {
  //       return (
  //         prevcount - 1
  //       )
  //     }
  //   }
  //   )
  // }
  // function IncreaseValue(){
  //   setCounter=>{prevcount=>{
  //     return(
  //       prevcount+1
  //     )
  //   }
  //   }
  // }
  return (
    <div className="App">
      <Person name={name} Lastname="Murtuza" age="29" />
      <Person name={name} />
      <div>
        <button onClick={()=>setCounter(prevcount=>prevcount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(prevcount=>prevcount+1)}>+</button>
      </div>
    </div>
  );
}

export default App;
