import { useState } from "react";

type Fruit = {
  id: number;
  name: string;
};

export default function App() {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [inputText, setInputText] = useState("");

  function addFruitHandler() {
    const id = Math.random();

    const fruit: Fruit = { id: id, name: inputText };

    setFruits((prev) => [...prev, fruit]);

    setInputText("");
  }

  function inputChangeHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    const value = ev.target.value;
    setInputText(value);
  }

  return (
    <div>
      <Button onClick={addFruitHandler}>ADD</Button>
      <input
        type="text"
        value={inputText}
        onChange={inputChangeHandler}
      />
      <ul>
        {fruits.map((fruit) => {
          return <li key={fruit.id}>{fruit.name.toLowerCase()}</li>;
        })}
      </ul>
    </div>
  );
}

type ButtonProps = {
  onClick: (...args: unknown[]) => unknown;
  children: React.ReactNode;
};

function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
