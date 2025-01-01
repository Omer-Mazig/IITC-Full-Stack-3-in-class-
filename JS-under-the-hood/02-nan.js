"use strict";

const x = NaN;
console.log(x === NaN); // false
console.log(NaN === NaN); // false

console.log(isNaN(NaN)); // true
console.log(isNaN("foo")); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN({ valueOf: 17 })); // true
console.log(isNaN(17)); // false
console.log(isNaN("900")); // false

console.log("typeof NaN:", typeof NaN); // number
