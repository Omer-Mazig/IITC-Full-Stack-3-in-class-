// -------------------- Union Types -------------------- //

() => {
  let stringOrNumber: string | number;
  stringOrNumber = "hi"; // this is OK
  stringOrNumber = 4; // this is OK
  stringOrNumber = null; // Type 'null' is not assignable to type 'string | number'.

  typeof stringOrNumber === "number"
    ? stringOrNumber.toFixed()
    : stringOrNumber.toLowerCase();

  // ---------------------- //

  let stringsOrNumbersArray: (string | number)[] = [];
  stringsOrNumbersArray.push("hi"); // this is OK
  stringsOrNumbersArray.push(4); // this is OK
  stringsOrNumbersArray.push(null); // Argument of type 'null' is not assignable to parameter of type 'string | number'.

  // ---------------------- //

  /*
   * IMPORTANT:
   *  please note that string | number[] is NOT the same as (string | number)[]
   * string | number[] means that the variable can contain either a single string or an array of numbers
   * (string | number)[] means that this is an array that can contain either strings or numbers
   */
  let test1: string | number[] = [];
  test1 = "hi"; // this is OK
  test1 = [1, 2, 3]; // this is OK
  test1.push(4); // this is OK
  test1.push("hi"); // Argument of type 'string' is not assignable to parameter of type 'number'.
  test1.push(null); // Argument of type 'null' is not assignable to parameter of type 'string | number'.

  // ---------------------- //

  type Color = "red" | "blue" | "green";
  let color: Color;
  color = "red";
  color = "yellow";
};

() => {
  type HasName = { name: string };
  type HasAge = { age: number };

  type Person = HasName | HasAge;

  let person: Person = { name: "John" }; // this is OK
  person = { age: 30 }; // this is OK
  person = { name: "John", age: 30 }; // this is OK
  // the last line is a bit confusing, but it is OK because we can have both name and age
};

// Real use case
(() => {
  type Success = {
    // if we have data, we can not have error
    data: string[];
    error: null;
  };

  type Failure = {
    // if we have error, we can not have data
    data: null;
    error: Error;
  };

  type Result = Success | Failure;

  let result_1: Result = {
    data: ["mama , yorai"],
    error: null,
  };

  let result_2: Result = {
    data: null,
    error: new Error("some error"),
  };

  // this is because of the relation between the types
  let result_3: Result = {
    data: null,
    error: null,
  };

  function handleResult(result: Result) {
    if (result.error) {
      // do something with the error
      console.error(result.error.message);
    } else {
      // do something with the data
      console.log(result.data.join(", "));
    }
  }

  // this is also "type narrowing". again, more about later...

  handleResult(result_1);
  handleResult(result_2);
  handleResult(result_3); // note that we can not pass result_3 because we explicitly defined the type of the result
})();
