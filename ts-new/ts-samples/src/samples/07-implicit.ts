// -------------------- Implicit Types -------------------- //

(() => {
  // Basic types
  let firstName = "John";
  firstName = 1337; // Type 'number' is not assignable to type 'string'.

  let age = 25;
  age.toLowerCase(); // Property 'toLowerCase' does not exist on type 'number'.

  let isActive = true;
  isActive = "somthing else"; // Type 'string' is not assignable to type 'boolean'

  let numsArray = [1, 2, 3];
  numsArray.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'number'.

  let person = {
    firstName: "John",
    lastName: "Doe",
  };
  person.age = 25; // Property 'age' does not exist on type '{ firstName: string; lastName: string; }'.

  // Implicit unions
  let arr = [1, "hello", true];
  arr.push(2); // this is OK
  arr.push("world"); // this is OK
  arr.push(false); // this is OK
  arr.push(null); // Argument of type 'null' is not assignable to parameter of type 'string | number | boolean'.

  // Typescript can infer the type of the variable
  let date = new Date();
  date.getDate();
  date.getTime();
})();

// implicit with functions

() => {
  // note that we always need to specify the types of the function parameters.
  // typescript can't infer it because it's dont know what the function will be used for
  // but, return type can be inferred based on the code inside the function
  function sum(a: number, b: number) {
    // Typescript can infer that the return type is a number
    // that becase 'a' and 'b' are both numbers, and number + number = number
    return a + b;
  }

  function isAdult(age: number) {
    // Typescript can infer that the return type is a boolean
    // that becase we use boolean expression to return the result
    return age > 18;
  }

  function getElementById(id: string) {
    // Typescript can infer that the return type is an HTMLElement or null
    // that becase we use the 'getElementById' method of the document object
    return document.getElementById(id);
  }

  function doSomeCondition(x: number, value: string) {
    if (x > 0) {
      // Typescript can infer that the return type is a string
      return value;
    } else {
      // Typescript can infer that the return type is a number
      return x;
    }
  }
};
