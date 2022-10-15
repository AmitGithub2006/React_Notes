import React, { useState, useEffect, useRef } from "react";

export function RefExample() {
  const [name, setName] = useState("");
  const countObj = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    countObj.current += 1;
    console.log(countObj.current);
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.style.border = "5px solid blue";
    inputRef.current.style.backgroundColor = "red";
  });

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onFocus={() => {
            inputRef.current.style.outline = "none";
            inputRef.current.style.border = "5px solid green"
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>this is {name}</p>
      <p>rendered {countObj.current} times</p>
    </div>
  );
}

// Whenever the value of useRef is changed, the component will not re-render.
