// Counter Using Closures Challenge
// -------------------------------
//
// Problem Description:
// Create a function that returns another function which acts as a counter. Each call should increment the count.
//
// Approach Tips:
// 1. Define an outer function (e.g., createCounter) that initializes a count variable.
// 2. Return an inner function that, when invoked, will:
//    - Increment the counter.
//    - Return the new count.
// 3. This demonstrates the concept of closures since the inner function accesses the outer variable.
// 4. Test by creating a counter instance and calling it several times.
function createCounter() {
  // TODO: Initialize your counter variable (e.g., let count = 0).
  // TODO: Return a function that increments and returns count.
}

// Test Cases for createCounter
const counter = createCounter();
console.log("Counter call 1:", counter()); // Expected output: 1
console.log("Counter call 2:", counter()); // Expected output: 2
console.log("Counter call 3:", counter()); // Expected output: 3
