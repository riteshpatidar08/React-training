import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        style={{
          height: "2rem",
          width: "5rem",
          margin: "10px",
          border: "none",
          backgroundColor: "blue",
          cursor: "pointer",
          color: 'white',
          // padding : '10px'
  
        }}
        onClick={props.handler}
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Button;
