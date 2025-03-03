// -------------------- Duck Typing -------------------- //

// "if it walks like a duck, and quacks like a duck, it is a duck"

// Typescript is a structural type system.
// It means that the type of an object is NOT determined by the type of the object, but by the structure of the object.

(() => {
  type Duck = {
    name: string;
    swim: () => void;
  };

  type Person = {
    name: string;
    swim: () => void;
  };

  const duck: Duck = { name: "Duck", swim: () => console.log("Duck swimming") };
  const person: Person = {
    name: "Bill",
    swim: () => console.log("Bill swimming"),
  };

  function swim(duck: Duck) {
    duck.swim();
  }

  swim(duck);
  swim(person);
  // person is not a Duck.
  // but if it has a swim method, and a name property.
  // it has the same structure as a Duck.
  // in other words, if it quacks like a duck, and walks like a duck, it is a duck.
})();

(() => {
  type Duck = {
    name: string;
    swim: () => void;
  };

  type Person = {
    name: string;
    swim: () => void;
    age: number;
    hobbies: string[];
  };

  const duck: Duck = { name: "Duck", swim: () => console.log("Duck swimming") };
  const person: Person = {
    name: "Bill",
    age: 14,
    hobbies: ["drinking"],
    swim: () => console.log("Bill swimming"),
  };

  function swim(duck: Duck) {
    duck.swim();
  }

  swim(duck);
  swim(person);
  // person is not a Duck.
  // but if it has a swim method, and a name property.
  // it has the same structure as a Duck.
  // in other words, if it quacks like a duck, and walks like a duck, it is a duck.
})();
