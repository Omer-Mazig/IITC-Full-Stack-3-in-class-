// -------------------- Type Alias -------------------- //

() => {
  // Basic Usage
  type Person = {
    firstName: string;
    lastName: string;
    birthday: Date;
  };

  let person_1: Person = {
    firstName: "omer",
    lastName: "mazig",
    birthday: new Date(),
  }; // this is OK

  // Typo!!!
  person_1.firstNama = "oleg"; // Property 'firstNama' does not exist on type 'Person'.

  let person_2: Person = {
    lastName: "mazig",
    birthday: new Date(),
  }; // Property 'firstName' is missing in type '{ lastName: string; }' but required in type 'Person'.

  let person_3: Person = {
    firstName: "omer",
    lastName: "mazig",
    birthday: new Date(),
    passowrd: "1234", //Object literal may only specify known properties, and 'passowrd' does not exist in type 'Person'.
  };

  // we can "intersect" types.
  type Employee = Person & { salary: number };

  let employee_1: Employee = {
    firstName: "baba",
    lastName: "bubu",
    birthday: new Date(),
    salary: 1000,
  };

  let employee_2: Employee = {
    firstName: "baba",
    lastName: "bubu",
    birthday: new Date(),
  }; // Type '{ firstName: string; lastName: string; }' is not assignable to type 'Employee'.

  let employee_3: Employee = {
    lastName: "bubu",
    salary: 1000,
    birthday: new Date(),
  }; // Type '{ lastName: string; salary: number; }' is not assignable to type 'Employee'.
};
