import { useState, useEffect } from "react";

function Baba() {
  const [arr, setArr] = useState<string[]>([]);

  useEffect(() => {
    setArr(["1", "2", "3"]);
  }, []);

  return null;
}

export default Baba;
