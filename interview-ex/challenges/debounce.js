// Debounce Function Challenge
// ---------------------------
//
// Problem Description:
// Implement a debounce function which delays the execution of a provided function until after a specified delay has passed
// since the last time it was invoked.
//
// Approach Tips:
// 1. Use a variable to store the ID of a timer (setTimeout).
// 2. Inside the returned function, clear any existing timer before starting a new one.
// 3. Use setTimeout to execute the provided function (fn) after the specified delay.
// 4. Consider the binding of "this" and passing arguments correctly.
// 5. Test your debounce function by simulating rapid function calls.
function debounce(fn, delay) {
  // TODO: Declare a variable (e.g., let timer) to hold the timer ID.
  // TODO: Return a new function that:
  //   - Clears the current timer (if any).
  //   - Sets a new timer with setTimeout to call fn after "delay" milliseconds.
  //   - Uses "fn.apply(this, args)" to maintain this-context and pass arguments.
}
