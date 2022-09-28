import React, { useState, useEffect } from "react";

export function TitleChangeHooks () {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        // for the first time load(rendering process)
        // for each re-rendering process, useEffect will be called.
        // We can replace componentDidMount and componentDidUpdate with useEffect
        // Any DOM change will be used in useEffect()
        // Any data which uses web API(fetch, setInterval(), setTimeOut(), promises) will be used in useEffect()
        console.log("hooks calling --> count changed")
        document.title = `${count} times clicked`
    }, [count])
    // If we add empty array, it will behave like componentDidMount i.e hooks will be called only once otherwise it will be called everytime whenever the state changes(just like componentDidUpdate).

    useEffect(() => {
      console.log("name changed")
    }, [name])

    return (
      <>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={() => setCount((prev) => prev + 1)}>click - {count} hooks</button>
      </>
    );
}

// render:- render in mount phase
// re-render:- render in updation phase

// useEffect will be called when any state or props changes.