import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("after updated", count);

    return () => {
      console.log("before update", count);
    };
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default Counter;
