import React from "react";

const Comp2 = (props) => {
  console.log(props.children);
  return (
    <div>
      {props.children}
      <h1>COM2 </h1>
    </div>
  );
};

export default Comp2;
