import React, { useState } from "react";

const CompEvents = () => {
  const [myName, setName] = useState("Rahul");
  const [myInput, setInput] = useState("");
  const onClickHandler = () => {
    console.log("TRY ME");
    setName("Rajesh");
    console.log(myName);
  };
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };
  const onSelectHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <button onClick={onClickHandler}>Try Me</button>
      <input
        type="text"
        value={myInput}
        onChange={onChangeHandler}
        placeholder="Type here"
      />
      <select name="" id="" onChange={onSelectHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>

      <h1>{myName}</h1>
      <h1>{myInput}</h1>
    </div>
  );
};

export default CompEvents;
