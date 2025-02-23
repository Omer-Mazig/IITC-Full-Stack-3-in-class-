import { useState } from "react";

export function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("REDNDER WITH COUNT: ", count);

  function handleClick() {
    // console.log("COUNT BEFORE INC: ", count);
    // setCount(count + 1);
    // console.log("COUNT AFTER INC: ", count);

    // React "batch" the renders
    setCount((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount2((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Use State</h2>
      <button onClick={handleClick}>State {count}</button>
    </div>
  );
}
