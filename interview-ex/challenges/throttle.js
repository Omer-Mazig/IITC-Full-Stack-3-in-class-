// Throttle Function Challenge
// ---------------------------
//
// Problem Description:
// Create a function that restricts the provided function from being called more than once every specified limit (milliseconds).
//
// Approach Tips:
// 1. Keep track of the last time the function was called (using a timestamp).
// 2. In the returned function, compare the current time with the last execution time.
// 3. Only execute the function if the difference exceeds the specified limit.
// 4. Update the last execution time appropriately.
// 5. Consider potential issues with the "this" context and arguments.
// 6. Test by repeatedly invoking the function and observing its execution frequency.
function throttle(fn, limit) {
  // TODO: Define a variable to store the last time the function was executed.
  // TODO: Return a new function that, on each call:
  //   - Gets the current time.
  //   - Checks if enough time has passed since the last call.
  //   - If yes, updates the timestamp and calls fn.
}
