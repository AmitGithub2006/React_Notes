import React, { useState, useEffect } from 'react';
import { useUpdateTitle } from '../components/hooks/useUpdateTitle';

export function DocTitleOne() {
    const [count, setCount] = useState(0);
    useUpdateTitle(count)


  return (
    <div>
        <button onClick={() => setCount((prev) => prev + 1)}>click = {count}</button>
    </div>
  )
}