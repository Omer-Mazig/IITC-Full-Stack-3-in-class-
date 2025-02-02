import React, { useState } from "react";

function ListsComponent() {
  const [fruits, setFruits] = useState(["banana", "melon", "apple"]);
  const [person, setPerson] = useState({ name: "naor", age: 14 });

  function incremetAge() {
    setPerson((prev) => ({ ...prev, age: prev.age + 1 }));
  }

  function addFruilt() {
    setFruits((prev) => [...prev, "water"]);
  }

  function removeApple() {
    setFruits((prev) => prev.filter((f) => f !== "apple"));
  }

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit}>
              <div>Fruit: {fruit}</div>
              <div>Index: {index}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListsComponent;
