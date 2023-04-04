import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          addCount();
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          minusCount();
        }}
      >
        Minus
      </button>
    </div>
  );
};

export default Count;
