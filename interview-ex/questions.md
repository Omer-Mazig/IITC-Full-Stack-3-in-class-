# JavaScript Interview Questions

This file contains a list of pure JavaScript interview questions. Each question includes a toggle section with the answer. Feel free to attempt answering before clicking to reveal the answer.

## Core Concepts

### 1. What is hoisting in JavaScript?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Hoisting is JavaScript's mechanism of moving variable and function declarations to the top of their scope during the compilation phase.  
  - For variables declared with `var`, declarations are hoisted (but not their initializations).  
  - Variables declared with `let` and `const` are hoisted as well but are not accessible before their declaration (resulting in a temporal dead zone).
</details>

### 2. What are closures and why are they useful?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  A closure is created when a function is defined inside another function, giving the inner function access to the outer function's variables even after the outer function has finished executing. Closures are useful for:
  - Data encapsulation
  - Maintaining state between function calls
  - Creating private variables and functions
</details>

### 3. What is the difference between `var`, `let`, and `const`?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  - **`var`**: Function-scoped, hoisted and can be re-declared within the same scope.  
  - **`let`**: Block-scoped, hoisted but not accessible before initialization (temporal dead zone), and cannot be re-declared within the same scope.  
  - **`const`**: Block-scoped like `let`, with the added constraint that the variable binding cannot be reassigned after its initial assignment.
</details>

### 4. Can you explain how the JavaScript event loop works?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  The event loop is the process that enables JavaScript's non-blocking execution. It continually checks the call stack and task queues:
  - **Call Stack:** Where functions are executed.
  - **Task Queue (or Callback Queue):** Where asynchronous event callbacks are queued.
  - **Microtask Queue:** Contains callbacks from Promises and other microtasks.
  
  When the call stack is empty, the event loop pushes tasks from the queues into the stack. This process enables asynchronous, non-blocking behavior even though JavaScript is single-threaded.
</details>

### 5. What is the difference between `==` and `===`?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  - `==` (loose equality) compares two values for equality after performing type coercion if necessary.
  - `===` (strict equality) compares two values for both value and type equality without performing type conversion.
</details>

## Advanced Concepts

### 6. How do `bind`, `call`, and `apply` work in JavaScript?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  These methods control the value of `this` inside functions:
  - **`call`**: Immediately invokes the function with a given `this` value and individual arguments.
  - **`apply`**: Immediately invokes the function with a given `this` value and arguments provided as an array.
  - **`bind`**: Returns a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
</details>

### 7. What is debouncing and throttling? How do they differ?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  - **Debouncing:**  
    Delays the execution of a function until after a specified amount of time has passed since the last time it was invoked. This is useful for events like window resizing or keypresses, where you only want the final event after the burst.  
  - **Throttling:**  
    Limits a function to only execute once every specified interval, regardless of how many times an event is triggered. This is useful for events like scrolling, where you want to regularly trigger a function, but not on every single event.
</details>

### 8. What is prototypal inheritance and how does it work in JavaScript?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. Each object has an internal property (commonly accessed via `__proto__` or through `Object.getPrototypeOf`) that points to its prototype. When a property or method is accessed, the JavaScript engine first checks the object itself; if not found, it looks up the prototype chain until it finds the property or method or ends at `null`.
</details>

## Additional Interview Questions

### 9. Explain the concept of "this" in JavaScript.

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  The value of `this` in JavaScript refers to the object that is executing the current function. Its value depends on how the function is called:
  - In the global context, `this` refers to the global object (e.g., `window` in browsers).
  - In a method, `this` refers to the object on which the method is invoked.
  - In event handlers, `this` typically refers to the DOM element that triggered the event.
  - When using `bind`, `call`, or `apply`, `this` can be explicitly set.
</details>

### 10. What is event delegation and why is it useful?

<details>
  <summary>Show Answer</summary>
  
  **Answer:**  
  Event delegation is a technique in which a single event listener is attached to a parent element instead of multiple listeners on individual child elements. The listener uses event bubbling to catch events on descendant elements. This technique improves performance and simplifies code management.
</details>

## Multiple Choice Questions

### 1. Which of the following best describes a JavaScript closure?

a) A function that references its outer variables even after the outer function has executed.  
b) A function that does not have access to its outer variables.  
c) A function that is immediately invoked.

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) A function that references its outer variables even after the outer function has executed.
</details>

### 2. What will be the output of the following code:

```javascript
console.log(typeof null);
```

a) "object"  
b) "null"  
c) "undefined"

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) "object". This is a well-known quirk in JavaScript.
</details>

### 3. In which scenario should you favor `const` over `let`?

a) When you plan to reassign the variable.  
b) When the variable's reference should remain constant.  
c) When you need a block-scoped variable that may change.

<details>
  <summary>Show Answer</summary>
  
  **Answer:** b) When the variable's reference should remain constant.
</details>

### 4. Which of these is NOT a common JavaScript error type?

a) ReferenceError  
b) TypeError  
c) OSError  
d) SyntaxError

<details>
  <summary>Show Answer</summary>
  
  **Answer:** c) OSError.
</details>

### 5. What does JSON stand for?

a) JavaScript Object Notation  
b) JavaScript Online Notation  
c) Java Standard Object Notation

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) JavaScript Object Notation.
</details>

---

Feel free to add more questions or modify any of the existing ones to tailor this guide to your interview preparation needs!
