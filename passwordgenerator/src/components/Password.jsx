import React, { useCallback, useEffect, useRef, useState } from 'react'

const Password = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState();

    // useRef() hook

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(()=> {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str += "0123456789";
        if(charAllowed) str += "@#$%&*!";

        for(let i=1; i<= length; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    },[length, numberAllowed,charAllowed,setPassword])

    const copyPassword = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
        passwordGenerator();
    },[length, numberAllowed, charAllowed, setPassword])

  return (
    <div className='container'>
        <h2 className='text-heading'>Password generator</h2>
        <div >
        <input
            type='text'
            placeholder='password'
            readOnly
            className='' 
            value={password}
            ref={passwordRef}
        />
        <button style={{backgroundColor:'orange'}} 
            onClick={copyPassword}
        >copy</button>
        </div>
        <div className='button'>
        <div>
            <input 
                type='range'
                min={8}
                max={50}
                value={length}
                onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {length} </label>
        </div>
        <div>
            <input 
                type='checkbox'
                value={numberAllowed}
                onChange={ () => {
                    setNumberAllowed( (prev) => !prev)
                }}
            />
            <label>Number</label>
        </div>
        <div>
            <input 
                type='checkbox'
                value={charAllowed}
                onChange={ () => {
                    setCharAllowed((prev) => !prev)
                }}
            />
            <label>Character</label>
        </div>
        </div>
    </div>
  )
}

export default Password;