import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
}
