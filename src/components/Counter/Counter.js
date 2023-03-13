import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(true);
  const onSubHandler = () => {
    console.log("Sub");
    const subCounter = counter - 1;
    setCounter(subCounter);
    checkCounter(subCounter);
  };
  const onAddHandler = () => {
    console.log("Add");
    const addCounter = counter + 1;
    setCounter(addCounter);
    checkCounter(addCounter);
  };
  const checkCounter = (counter) => {
    if (counter <= 0) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div>
      <h1>COUNTER</h1>
      <button onClick={onSubHandler} disabled={toggle}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={onAddHandler}>+</button>
    </div>
  );
};

export default Counter;
