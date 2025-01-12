export class Person {
  name: string; // Property to hold the name of the person
  private dna = "dasl;kxalsjsopal";
  static count = 0;

  constructor(name: string) {
    this.name = name; // 'this' refers to the instance being created
    Person.count++;
  }

  // static methods exist on the class, not on the instances (john)
  static someStaticMethod() {
    console.log("Static and Ben-el");
  }

  // Method to display a greeting message
  greet() {
    console.log(`Hello, my name is ${this.name} and my seret is ${this.dna}`);
  }

  // Method to change the person's name
  changeName(newName: string) {
    this.name = newName; // 'this' is used to update the current instance's name
    console.log(`My name is now ${this.name}`);
  }
}

// console.log(Person.count);
// const p_1 = new Person("John"); // Create a new instance of Person
// p_1.greet(); // Output: Hello, my name is John
// p_1.changeName("Johnny"); // Updates the name and outputs: My name is now Johnny

// Person.someStaticMethod(); // Output: Static and Ben-el

// const d = new Date();
// const c = new Date();

// Date.now;

// Array.isArray;

// console.log(p_1);
// console.log(Person.count);

// const p_2 = new Person("Baba");

// console.log(p_1.greet === p_2.greet);

// console.log(Person.prototype);

// console.log(p_1.greet === Person.prototype.greet);

// console.log(Object.getPrototypeOf(p_1) === Person.prototype);

// const arr = [1, 2];
// console.log(arr);

// console.log(arr.map === Array.prototype.map);
// console.log(Object.getPrototypeOf(arr) === Array.prototype);
