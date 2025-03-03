// -------------------- Functions -------------------- //

() => {
  // function that takes 2 numbers (a , b) and return a number
  function sum(a: number, b: number): number {
    return a + b;
  }

  sum(1, 3); // this is OK
  sum(1, "17"); // Argument of type 'string' is not assignable to parameter of type 'number'.

  let stringResult: string;
  stringResult = sum(1, 17); // Type 'number' is not assignable to type 'string'.

  let numberResult: number;
  numberResult = sum(1, 17); // this is OK

  function doSomthing(txt: string): void {
    console.log(txt);
  }

  doSomthing("baba");
};
