import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function Check() {
  const [count, setCount] = useState(0);

  const change = () => {
    console.log("in change")
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("in effect")
    let data = setInterval(change, 1000);

    // component will unmount or clean up
    return () => {
        console.log("cleaning the component")
    //   clearInterval(data);
    };
    // If we are returning something inside useEffect, then it will clean up the data.(in react 17th version).
  }, []);

  return <div>{count}</div>;
}

// Till react 17th version, useEffect has one mounting phase and one unmounting phase only.
// Now react developers are trying to achieve mount and unmount the data any number of times. But react is not behaving properly due to this(First time, it should be mounting only but mounting->unmounting->mounting is happening) so to avoid this problem, react developers came up with a workaround i.e we remove "React.StrictMode" in index.js file then it will start behaving like 17th version.