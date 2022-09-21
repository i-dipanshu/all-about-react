import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const getWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [width]);

  return (
    <div className="main">
      <h1>My Screen Size</h1>
      <h1>{width}</h1>
    </div>
  );
};

export default CleanUp;
