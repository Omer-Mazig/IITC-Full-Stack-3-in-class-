import React, { useState } from "react";

function StateComponent() {
  console.log("App rendering...");

  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  function handleIncrementCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrementCount}>Increment Count</button>
      <button onClick={setOpen((prev) => !prev)}>Toggle Open</button>
    </div>
  );
}

export default StateComponent;
