import { useEffect, useRef, useState } from "react";
import { CatItem } from "./cat-item";

const CATS = [
  {
    id: "1",
    name: "baba",
  },
  {
    id: "2",
    name: "mama",
  },
];

export interface Cat {
  id: string;
  name: string;
}

export default function App() {
  const [cats, setCats] = useState<Cat[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCats(CATS);
  }, []);

  async function handleDelete(id: string) {
    setCats((prev) => prev.filter((cat) => cat.id !== id));
  }

  function handleAdd() {
    if (!inputRef.current) return;
    const newCatName = inputRef.current.value;

    setCats((prev) => [...prev, { id: newCatName, name: newCatName }]);
  }

  function log(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (ev.ctrlKey) {
      console.log("bab");
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          ref={inputRef}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {cats.map((cat) => {
          return (
            <CatItem
              key={cat.id}
              cat={cat}
              handleDelete={handleDelete}
              baba=""
              mama="hi"
            />
          );
        })}
      </ul>

      <button onClick={log}>Log</button>
    </div>
  );
}
