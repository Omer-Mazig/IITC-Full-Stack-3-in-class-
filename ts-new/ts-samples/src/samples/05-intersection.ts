// -------------------- Intersection -------------------- //

() => {
  type SomeObject_1 = {
    firstName: string;
    lastName: string;
  };

  type SomeObject_2 = {
    age: number;
    hobbies: string[];
  };

  type Person = SomeObject_1 & SomeObject_2;

  let person: Person = {
    firstName: "bob",
    lastName: "the builder",
    age: 14,
    hobbies: ["building", "drinking"],
  };

  // ---------------------- //

  type X = 1 | 2 | 3 | 4 | 5;
  type Y = 3 | 4 | 5 | 6 | 7;

  type U = X | Y; // U is 1 | 2 | 3 | 4 | 5 | 6 | 7

  type Z = X & Y; // Z is 3 | 4 | 5 (the common type between X and Y)

  type Color = "red" | "green" | "blue" | "orange";
  type Fruit = "apple" | "banana" | "orange" | "pineapple";

  type ColorAndFruit = Color & Fruit;
  // ColorAndFruit is "orange" (the common type between Color and Fruit)

  type A = 1 | 2 | 3;
  type B = 4 | 5 | 6;

  type C = A & B;
  // C is never (no common type between A and B)

  // so, what is the these intersections ???
  type MyType1 = string & number;
  type MyType2 = boolean & string;
  type MyType3 = null & undefined;

  // these are type 'never'.

  // ---------------------- //

  type Action =
    | "create"
    | "read"
    | "update"
    | "delete"
    | { value: "create" | "read" | "update" | "delete" };

  let action: Action;
  action = "create";
  action = "read";
  action = "update";
  action = "delete";
  action = { value: "create" };
  action = { value: "read" };
  action = { value: "update" };
  action = { value: "delete" };

  // type 'Action' is somewhat WIDE. we can narrow it down.
  // i want to be able to use the action as a STRING only (without the object with the 'value' property)

  type ActionAsString = Action & string;

  let actionAsStringOnly: ActionAsString;
  actionAsStringOnly = "create";
  actionAsStringOnly = "read";
  actionAsStringOnly = "update";
  actionAsStringOnly = "delete";
  actionAsStringOnly = "baba";

  // this is not allowed
  actionAsStringOnly = { value: "create" };
  actionAsStringOnly = { value: "read" };
  actionAsStringOnly = { value: "update" };
  actionAsStringOnly = { value: "delete" };
};
