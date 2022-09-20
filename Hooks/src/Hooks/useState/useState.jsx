import React, { useState } from "react";
import "./useState.css";

const Toggle = () => {
  // useState is function that returns an array of variable and a function
  // it takes initial state as  argument
  // we can destructure both

  // initial state
  const initialState = "Dipanshu";

  const [myName, setMyName] = useState(initialState);

  const toggle = () => {
    // this will be trigged on click of button
    // so we call the setMyName function to change our initial state
    let name = (myName) === "Dipanshu" ? "Ankur" : "Dipanshu"
    setMyName(name);
  };
  return (
    <div className="main">
      <h1>{myName}</h1>
      <button className="btn" onClick={toggle}>
        Click Me
      </button>
    </div>
  );
};

export default Toggle;
