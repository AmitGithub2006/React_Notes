import React, { useState, useMemo } from 'react';

export function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne((prevCounterOne) => prevCounterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo((prevCounterOne) => prevCounterOne + 1);
  };

  const isEven = useMemo(() => {
    console.log("even fn")
    let i = 0;
    while(i < 2000000000) i++;
      return counterOne % 2 === 0;
  }, [counterOne]);

  // useMemo takes two thimgs -: function and dependency list

  return (
    <>
      <div>
        <button onClick={incrementOne}>counterOne = {counterOne}</button>
        {isEven ? <span>Even</span> : <span>Odd</span>}
      </div>
      <div>
        <button onClick={incrementTwo}>counterTwo = {counterTwo}</button>
      </div>
    </>
  );
}