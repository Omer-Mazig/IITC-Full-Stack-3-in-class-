// -------------------- Explicit Types -------------------- //

() => {
  let firstName: string = "John";
  firstName.toLowerCase();
  firstName = 420; // Type 'number' is not assignable to type 'string'.

  let age: number = 25;
  age.toLowerCase(); // Property 'toLowerCase' does not exist on type 'number'.

  let isActive: boolean = true;
  isActive = "somthing else"; // Type 'string' is not assignable to type 'boolean'

  // syntax option no.1
  let numsArray1: number[] = [];
  numsArray1.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'number'.

  // syntax option no.2
  let numsArray2: Array<number> = [];
  numsArray2.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'number'.

  let myData: string[] = null; // Type 'null' is not assignable to type 'string[]'.
  myData = ["mama , yorai"]; // this is OK

  let person: {
    firstName: string;
    lastName: string;
  } = {
    firstName: "John",
    lastName: "Doe",
  };
  person.age = 25; // Property 'age' does not exist on type '{ firstName: string; lastName: string; }'.
};
