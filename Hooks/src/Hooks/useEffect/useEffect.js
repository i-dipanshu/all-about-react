import React, { useEffect, useState } from "react";
import "../useState/useState.css";

const UpdateTitle = () => {
  const [count, setCount] = useState(1);

  /* The function passed to useEffect will run every time after the render is committed to the screen. */
  useEffect(() => {
    (document.title = `Chats (${count})`);
  });

  return (
    <div className="main">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} className="btn">Click Me</button>
    </div>
  );
};

export default UpdateTitle;
