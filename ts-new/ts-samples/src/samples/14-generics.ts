// -------------------- Generics -------------------- //
// Generics are a way to create reusable components / types that can work with multiple types while keeping the type safety and flexibility

// challenge:
// 1. we want to make a function that take a value and return an array of the value
// 2. we want the type of the array to be the same as the type of the value
// in other words, we want to have a RELATIONSHIP between the input and the output

// the problem:
(() => {
  function makeArray(value: any) {
    return [value];
  }

  const stringArray = makeArray("hello");
  const numberArray = makeArray(17);

  stringArray.push(2); // no error (but it should be an error)
  numberArray.push("hello"); // no error (but it should be an error)

  // makeArray will always return an array of type any...
})();

// the solution:
() => {
  function makeArray<TValue>(value: TValue): TValue[] {
    return [value];
  }

  const stringArray = makeArray("hello");
  const numberArray = makeArray(17);

  stringArray.push(2);
  numberArray.push("hello");

  // makeArray will always return an array of the same type as the input
  // in other words, we have a RELATIONSHIP between the input and the output, SUCCESS!
};

// a realationhip between the input and another input
(() => {
  // 'extends keyof TObj' means that the key (TKey) must be a key of the object (TObj)
  function getValueByKey<TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) {
    return obj[key];
  }

  const obj = { a: 1, b: 2, c: 3 };
  const value = getValueByKey(obj, "a");
  const value2 = getValueByKey(obj, "d"); // error

  const person = { name: "baba", age: 13 };
  const a = getValueByKey(person, "age");
})();

(() => {
  function describeLengthOf<T extends { length: number }>(item: T): string {
    return `This item has ${item.length} units`;
  }

  describeLengthOf("hello");
  describeLengthOf([1, 2, 3]);
  describeLengthOf({ length: 10 });
  describeLengthOf({ length: 10, width: 20 });
  describeLengthOf(17);
})();

// Generic Types
(() => {
  // simple generic type (not very useful)
  type Box<T> = {
    value: T;
  };

  const box1: Box<string> = { value: "hello" };
  const box2: Box<number> = { value: 17 };
  const box3: Box<boolean> = { value: "baba" }; // value should be a boolean
})();

(() => {
  // real world use case:
  type ApiResponse<T> =
    | {
        data: T;
        error: null;
      }
    | {
        data: null;
        error: Error;
      };

  const response1: ApiResponse<number> = { data: 123, error: null }; // data should be a string
  const response2: ApiResponse<string> = { data: 123, error: null }; // data should be a string
  const errorResponse: ApiResponse<string> = { data: "hello", error: "error" }; // error should be an Error
})();
