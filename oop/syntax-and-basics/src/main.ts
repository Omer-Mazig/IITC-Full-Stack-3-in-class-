import "./style.css";
import typescriptLogo from "./typescript.svg";
import { Person } from "./oop/basic-syntax";
import { Vehicle } from "./oop/inheritance";
import { Animal } from "./oop/polymorphism";
import { BankAccount } from "./oop/encapsulation";
import { LocalStorageSaver } from "./oop/abstraction";
import { Bird } from "./oop/inheritance-bad";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>

    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hello OOP</h1>
  </div>
`;

// Person;
// BankAccount;
// Vehicle;
// LocalStorageSaver;
// Animal;
// Bird;

declare global {
  interface Array<T> {
    myMap<U>(callback: (item: T, index: number, array: T[]) => U): U[];
  }
}

Array.prototype.myMap = function <T, U>(
  this: T[],
  callback: (item: T, index: number, array: T[]) => U
): U[] {
  const result: U[] = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const numbers = [1, 2, 3];

const myDoubles = numbers.myMap((number, index, array) => {
  return number * 2;
});

const doubles = numbers.map((number, index, array) => {
  return number * 2;
});

console.log(doubles);

console.log(myDoubles);
