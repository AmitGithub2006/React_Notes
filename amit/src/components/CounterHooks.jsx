import React, { useState } from 'react';
import { INITIAL_COUNT } from "./constants"

export function CounterHooks () {
    const [count, setCount] = useState(INITIAL_COUNT);
    const [name, setName] = useState("Amit");

    // useState will call a function with a default value


    const handleName = () => {
        if(name === "Amit") {
            setName(name.toUpperCase())
        }
    }

    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleDecrement = () => {
        setCount(count-1)
    }

    // const incrementByFive = () => {
    //     setCount(count+1)
    //     setCount(count+1)
    //     setCount(count+1)
    //     setCount(count+1)
    //     setCount(count+1)
    // }
    // This will not work as setState is an asynchronous operation.

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            console.log(`i --> ${i}, count --> ${count}`)
            setCount((prevCount) => prevCount + 1);
        }
    }

    return (
      <>
        <p>Count: {count}</p>
        <p>My name is {name}</p>
        {/* pass params then use () => */}
        {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
        {/* OR */}
        <button onClick={handleIncrement}>increment</button>
        {/* <button onClick={() => setCount(count - 1)}>decrement</button> */}
        {/* OR */}
        <button onClick={incrementByFive}>increment by 5</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={() => setCount(INITIAL_COUNT)}>Reset</button>
        <button onClick={handleName}>Capitalize</button>
        
      </>
    );
}

// React properties inside function known as hooks.