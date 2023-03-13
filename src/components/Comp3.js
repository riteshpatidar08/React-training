import React from "react";

const Comp3 = ({ name, lname }) => {
  return (
    <>
      user details
      <h1 className="custom__h1">
        {name} {lname}
      </h1>
    </>
  );
};

export default Comp3;
