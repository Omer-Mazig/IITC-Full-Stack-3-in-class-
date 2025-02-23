import { useEffect, useState } from "react";

export function UseEffectDemo1() {
  const [count, setCount] = useState(0);
  const [baba, setBaba] = useState("baba");

  useEffect(() => {
    console.log("EFFECT RUN", count);
  }, [count]);

  console.log("COMPONENT RENDERING", count);

  return (
    <div>
      <h2>Use Effect</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setBaba("omer")}>{baba}</button>
    </div>
  );
}
