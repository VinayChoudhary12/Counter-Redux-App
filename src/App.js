import './App.css';

//import ProductForm from './Components/ProductForm';
import {useState} from 'react';
function CounterApp(){
const [count,countValue]=useState(0);
function Increment(){
  countValue(count+1);
}

function decrement(){
  countValue(count-1);
}
function ResetHandler(){
  countValue(0);
}
  return(
    <div className="App">
    <div className="heading">
     Increment && Decrement
    </div>
    <div className='button-content'>
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={Increment}>+</button>
    </div>
    <div className="reset_button">
      <button  onClick={ResetHandler}>Reset</button>
    </div>
    </div>
  );
}
export default CounterApp;