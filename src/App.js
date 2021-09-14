import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("")

  useEffect(() => {
    setColor(randomColor())
  }, [count])

  useEffect(() => {
    const intervalId = setInterval(() => {

      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId)
  }, []);

  return (
    <div>
      <h1 style={{color}}>{count}</h1>
    </div>
  );
}

export default App;
