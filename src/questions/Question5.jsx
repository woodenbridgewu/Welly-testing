import React, { useState } from "react";
import BoxModal from "../modals/BoxModal";

function Question5() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  const reset = () => {
    setCount(0);
  };

  return (
    <BoxModal>
      <h3>問題5 計數器組件</h3>
      <div className="counter-container">
        <p>當前計數: {count}</p>
        <div>
          <button className="round-button" onClick={decrement}>
            -
          </button>
          <button className="reset-button" onClick={reset}>
            reset
          </button>
          <button className="round-button" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </BoxModal>
  );
}

export default Question5;
