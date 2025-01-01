// IFFE - Immediately Invoked Function Expression

// Regular function:
function foo() {
  console.log("foo!");
}

foo();

// IFFE:
(() => {
  console.log("IIFE");
})();

((x) => {
  console.log(x);
})("baba");
