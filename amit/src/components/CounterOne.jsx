import React, { useState } from 'react';
import { useCounter } from './hooks/useCounter';

export function CounterOne() {
   const [count, increment, decrement, reset] = useCounter()

    return (
        <>
        <h1>count = {count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        </>
    )
}