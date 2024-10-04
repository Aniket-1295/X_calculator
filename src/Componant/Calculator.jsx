import React, { useState } from 'react';
import './Cal.css';

function Calculator() {
  const [input, setInput] = useState('');  
  const [result, setResult] = useState(''); 
  
 
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  
  const handleClear = () => {
    setInput('');
    setResult('');  
  };

  
  const handleEvaluate = () => {
    try {
      if (input === '') {
        setResult('Error');
      } else if (input.includes('/0')) {
        if (input === '0/0') {
          setResult('NaN');
        } else {
          setResult('Infinity');
        }
      } else {
        const evalResult = eval(input); 
        setResult(evalResult.toString()); 
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} disabled />
      <div className="result">{result}</div> 
      <div className="calculator-buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;


