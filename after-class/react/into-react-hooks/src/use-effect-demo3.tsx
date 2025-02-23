import { useEffect, useState } from "react";

export function UseEffectDemo3() {
  const [count, setCount] = useState(0);

  console.log("COMPONENT RENDER");

  function func() {
    console.log("baba");
  }

  useEffect(() => {
    document.addEventListener("click", func);

    return () => {
      document.removeEventListener("click", func);
    };
  }, []);

  return (
    <div>
      <h2>Use Effect 3</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
