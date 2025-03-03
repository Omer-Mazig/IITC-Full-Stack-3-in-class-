// -------------------- Narrow vs Wide -------------------- //

() => {
  // Action is a narrower version of string
  type Action = "create" | "read" | "update" | "delete";

  let actions: Action[] = []; // narrower
  let strings: string[] = []; // wider

  function handleActions(actions: string[]) {
    // we CAN pass a narrower type (Action[]) to a function that expects a wider type (string[])
    console.log(actions);
  }

  handleActions(actions);
  handleActions(strings);
};

(() => {
  // Action is a narrower version of string
  type Action = "create" | "read" | "update" | "delete";

  let actions: Action[] = []; // narrower
  let strings: string[] = []; // wider

  function handleActions(actions: Action[]) {
    // we CAN NOT pass a wider type (string[]) to a function that expects a narrower type (Action[])
    console.log(actions);
  }

  handleActions(actions);
  handleActions(strings);
})();

(() => {
  const obj_1 = {
    x: 1,
  };

  const obj_2 = {
    x: 1,
    y: 2,
  };

  function printX(obj: { x: number }) {
    console.log(obj.x);
  }

  printX(obj_1);
  printX(obj_2);

  function printY(obj: { y: number }) {
    console.log(obj.y);
  }

  printY(obj_1);
  (() => {
    const obj_1 = {
      x: 1,
    };

    const obj_2 = {
      x: 1,
      y: 2,
    };

    function printX(obj: { x: number }) {
      console.log(obj.x);
    }

    printX(obj_1);
    printX(obj_2);

    function printY(obj: { y: number }) {
      console.log(obj.y);
    }

    printY(obj_1);
    printY(obj_2);

    /*   
      'obj_1' is wider than 'obj_2' because it has fewer properties.
      'obj_2' is narrower version of 'obj_1'.
      the reason we say it because obj_1 could fit into every place that obj_2 could fit into, 
      but not the other way around.
    */
  })();
  printY(obj_2);

  /*   
      'obj_1' is wider than 'obj_2' because it has fewer properties.
      'obj_2' is narrower version of 'obj_1'.
      the reason we say it because obj_2 could fit into every place that obj_1 could fit into, 
      but not the other way around.
    */
})();

// -------------------- Narrowing -------------------- //

(() => {
  function example1(value: string | number) {
    return value.length; // Property 'length' does not exist on type 'number'.
  }

  // we can narrow the type by using typeof
  function example2(value: string | number) {
    if (typeof value === "string") {
      // value must be a string
      return value.length;
    } else {
      // value must be a number
      return value * 2;
    }
  }

  // we can narrow the type by using instanceof
  function example3(value: string | Date) {
    if (value instanceof Date) {
      // value must be a Date
      return value.getTime();
    } else {
      // value must be a string
      return value.length;
    }
  }

  let arr = [1, "hello", new Date()];

  arr.forEach((item) => {
    if (typeof item === "string") {
      // item must be a string
      return item.length;
    }

    if (typeof item === "number") {
      // item must be a number
      return item * 2;
    }

    if (item instanceof Date) {
      // item must be a Date
      return item.getTime();
    }
  });
})();

// Real world example
(() => {
  function getData(): string {
    try {
      // imagine this is an API call
      return "data";
    } catch (error) {
      // typescript does not know the shape of the error. so it infers the type as unknown
      // so we need to narrow the type
      // we can use the handleError function to handle the error
      return handleError(error);
    }
  }

  function handleError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      // this function need to return a string, so we must check the type of the key 'message'
      typeof error.message === "string"
    ) {
      return error.message;
    }

    if (typeof error === "string") {
      return error;
    }

    return "unknown error";
  }
})();
