"use strict";

// how it looks:
function foo_1() {
  console.log("baba before:", baba);
  var baba = "hey here!";
  console.log("baba after:", baba);
}

// how it works:
function foo_2() {
  var baba = undefined;
  console.log("baba before:", baba);
  baba = "hey here!";
  console.log("baba after:", baba);
}

// foo_1();
// foo_2();

// var x = 10;
// var x = 15;

// change to "let" and see what the result
function foo() {
  var x = "function variable";
  console.log(x);

  if (true) {
    var x = "babaluba";
    console.log(x);
  }

  console.log(x);
}

// foo();

var value = "x";

// how it looks:
function varIsCrazy() {
  if (!value) {
    var value = "y";
  }
  console.log(value);
}

// how it works:
function varIsCrazy() {
  var value = undefined;
  if (!value) {
    value = "y";
  }
  console.log(value);
}

// varIsCrazy();
