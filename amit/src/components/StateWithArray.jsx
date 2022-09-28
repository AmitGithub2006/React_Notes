import React, { useState } from 'react'

export const StateWithArray = () => {
    const [items, setItems] = useState([])
    const [fruit, setFruit] = useState("")

    const addItem = () => {
        setItems([...items, fruit])
        setFruit("")
    }

  return (
    <>
      <input
        type="text"
        value={fruit}
        placeholder={"write your item here..."}
        onChange={(e) => setFruit(e.target.value)}
      />
      <button onClick={addItem}>add items</button>
      {items.map((item) => (
        <div>
          <span>{item}</span>
          <button>Edit</button>
          <button onClick={() => {
            let filteredItems = items.filter((value) => value !== item)
            setItems([...filteredItems])
          }}>Delete</button>
        </div>
      ))}
    </>
  );
}

// Hooks should be used only inside functional components, use only with react object and always initialize at the top.