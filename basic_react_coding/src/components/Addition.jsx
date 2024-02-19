import React, { useState } from 'react';


const Addition = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [result, setResult] = useState();

    const inputHandler = (e, setNumber) => {
        const value = parseFloat(e.target.value);
        setNumber(value);
    }

    const addvalues = () => {
        const response = value1 + value2;
        setResult(response);
    }
  return (
    <div>
        <input 
            placeholder='Enter Value'
            value={value1}
            onChange={(e) => inputHandler(e, setValue1)}
        />
        <input 
            placeholder='Enter Value'
            value={value2}
            onChange={(e) => inputHandler(e, setValue2)}
        />
        <span>{result}</span>
        <button onClick={addvalues}>+</button>
    </div>
  )
};

export default Addition;