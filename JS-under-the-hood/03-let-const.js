"use strict";

const x = "global scope";

function foo() {
  const y = "function scope";
  const x = "another function scope"; // hiding th global variable
  console.log(x);

  if (true) {
    const z = "block scope";
    // console.log(x);
    // console.log(y);
    // console.log(z);
  }

  //   console.log(x);
  //   console.log(y);
  //   console.log(z);
}

// console.log(y);
// console.log(x);

// foo();

bar();

function bar() {
  console.log(mama);
  let mama = "xxx";
}
