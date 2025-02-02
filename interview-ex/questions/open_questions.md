# Open-ended JavaScript Interview Questions

This file contains open-ended interview questions for practice. Attempt to answer them before revealing the answers.

## Open Questions

### 1. What is hoisting in JavaScript?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Hoisting is JavaScript's behavior of moving declarations (variables and functions) to the top of their containing scope during the compilation phase. This allows functions and variables to be referenced before they are declared in the code, though variables declared with `let` and `const` are not fully initialized.
</details>

### 2. What are closures and why are they useful?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  A closure occurs when an inner function preserves access to variables from its outer function even after the outer function has finished executing. They are useful for data encapsulation, maintaining state, and creating private variables.
</details>

### 3. What is the difference between `var`, `let`, and `const`?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  `var` is function-scoped and can be re-declared, while `let` and `const` are block-scoped with `const` disallowing reassignment after its initial value. Additionally, variables declared with `let` and `const` are subject to the temporal dead zone.
</details>

### 4. Can you explain how the JavaScript event loop works?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  The event loop continuously monitors the call stack and task queues to manage asynchronous operations. It moves tasks from the macrotask (or callback) queue or microtask queue into the call stack when it's empty, ensuring non-blocking execution.
</details>

### 5. What is the difference between `==` and `===`?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  The `==` operator performs type coercion before comparing values, while the `===` operator compares both value and type without coercing types. Using `===` generally avoids unexpected results due to type conversion.
</details>

### 6. How do `bind`, `call`, and `apply` work in JavaScript?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  These methods allow you to control the value of `this` inside a function. `call` and `apply` invoke the function immediately (with the latter expecting an array of arguments), while `bind` returns a new function with `this` bound to a specific value.
</details>

### 7. What is debouncing and throttling? How do they differ?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Debouncing delays the execution of a function until after a specified interval since its last call, while throttling ensures a function is executed at most once in a specified time period. These techniques help manage the frequency of function calls in response to rapid events.
</details>

### 8. What is prototypal inheritance and how does it work in JavaScript?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Prototypal inheritance allows objects to inherit properties and methods from other objects via a prototype chain. When a property is accessed, JavaScript traverses the prototype chain to locate it if it's not found on the object itself.
</details>

### 9. Explain the concept of "this" in JavaScript.

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  The value of `this` is determined by the context in which a function is called. It can refer to the global object, a specific object when used in methods, or be explicitly bound using methods like `call`, `apply`, or `bind`.
</details>

### 10. What is event delegation and why is it useful?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Event delegation involves attaching a single event listener to a parent element instead of to each individual child element. This leverages event bubbling to improve performance and simplify event management.
</details>

### 11. What are Promises in JavaScript and how do they work?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Promises represent the eventual completion or failure of an asynchronous operation and allow you to attach callbacks with `.then()` and `.catch()`. They offer a more structured and readable alternative to nested callbacks.
</details>

### 12. Can you explain async/await and how it simplifies asynchronous code?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Async/await syntax allows you to write asynchronous code that appears synchronous, making it easier to read and maintain. It is built on top of Promises, where the `await` keyword pauses execution until the Promise is resolved.
</details>

### 13. What is the spread operator and how does it differ from the rest parameter?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  The spread operator (`...`) expands an iterable (like an array) into individual elements, whereas the rest parameter collects multiple elements into a single array. Although they share the same syntax, their use cases are opposite.
</details>

### 14. What are function declarations and function expressions? How do they differ?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Function declarations create named functions that are hoisted, allowing them to be called before they are defined in the code. Function expressions assign a function to a variable and are not hoisted, so they must be defined before use.
</details>

### 15. How does error handling work in JavaScript? Explain try/catch.

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  JavaScript error handling is typically done using try/catch blocks, where code that might throw an error is placed inside the try block and errors are caught in the catch block. This allows the program to continue running even when an error occurs.
</details>

### 16. Why is immutability important in JavaScript programming?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Immutability helps in avoiding unintended side effects, making state changes more predictable and easier to debug. It is particularly valued in functional programming and frameworks like React for reliable state management.
</details>
