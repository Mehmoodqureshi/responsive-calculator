import React from "react";
import { useGlobalContext } from './context';
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import './index.css';

export default function Display() {
  const [result, setResult] = useState("");
  const { isCalculatorOpen, closeCalculator } = useGlobalContext();

  //set the value if button is clicked
  const handleClick = (e) => {
     e.preventDefault();
    setResult(result.concat(e.target.name));
  };
  //clear the display
  const handleClear = (e) => {
    e.preventDefault();
    setResult("");
  };
  //handle the removing value
  const handleBackSpace = (e) => {
    e.preventDefault();
    setResult(result.slice(0, -1));
  };
  //evalute the value
  const Cal =(e)=>{
    e.preventDefault()
    try{
        setResult(eval(result).toString())
    }
    catch(error){
        setResult("error")
    }
  }
  return (
    <div className={`${
      isCalculatorOpen ? 'modal-overlay show-modal' : 'modal-overlay'
    }`}>
      
      <div className="modal-container">
      <h1>My Calculator</h1>
      <div className="wrapper">
        <input type="text" value={result} />
        <div className="keypad">
          <button onClick={handleClear} className="clear" >clear</button>
          <button onClick={handleBackSpace} className="backspace" id="special-keys"> &larr;</button>
          <button onClick={handleClick} name="/" id="special-keys">/</button>
          <button className="key-btn" onClick={handleClick} name="7">7</button>
          <button className="key-btn" onClick={handleClick} name="8">8</button>
          <button className="key-btn" onClick={handleClick} name="9">9</button>
          <button onClick={handleClick} name="*" id="special-keys">&times;</button>
          <button className="key-btn" onClick={handleClick} name="4">4</button>
          <button className="key-btn" onClick={handleClick} name="5">5</button>
          <button className="key-btn" onClick={handleClick} name="6">6</button>
          <button onClick={handleClick} name="-" id="special-keys"> &ndash; </button>
          <button className="key-btn" onClick={handleClick} name="1">1</button>
          <button className="key-btn" onClick={handleClick} name="2">2</button>
          <button className="key-btn" onClick={handleClick} name="3">3</button>
          <button onClick={handleClick} name="+" id="special-keys">+</button>
          <button className="key-btn" onClick={handleClick} name=".">.</button>
          <button className="key-btn" onClick={handleClick} name="0">0</button>
          <button onClick={Cal} className="equals">=</button>
                 
        </div>
      </div>
      </div>
      <button className='close-modal-btn' onClick={closeCalculator}>
          <FaTimes></FaTimes>
        </button>
    </div>
  );
}
