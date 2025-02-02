# Multiple-Choice JavaScript Interview Questions

This file contains multiple-choice interview questions. Click on "Show Answer" for each question to reveal the answer and a brief explanation.

## Multiple Choice Questions

### 1. Which of the following best describes a JavaScript closure?

a) A function that references its outer variables even after the outer function has executed.  
b) A function that does not have access to its outer variables.  
c) A function that is immediately invoked.

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) A function that references its outer variables even after the outer function has executed.  
  **Explanation:** Closures capture the lexical scope of the outer function, allowing the inner function to access its variables even after the outer function completes. This is a key feature used in data privacy and module patterns.
</details>

### 2. What will be the output of `console.log(typeof null);`?

a) "object"  
b) "null"  
c) "undefined"

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) "object"  
  **Explanation:** Due to a historical bug in JavaScript, `null` is classified as an object, even though it is a primitive value. This behavior is well-known and documented.
</details>

### 3. Which keywords are used to create block-scoped variables?

a) var  
b) let  
c) const  
d) both b and c

<details>
  <summary>Show Answer</summary>
  
  **Answer:** d) both b and c  
  **Explanation:** Both `let` and `const` provide block-scoping, while `var` does not and is function-scoped instead. This distinction often helps avoid accidental variable reassignments and scope issues.
</details>

### 4. Which method is used to convert a JSON string into a JavaScript object?

a) JSON.stringify  
b) JSON.parse  
c) JSON.convert

<details>
  <summary>Show Answer</summary>
  
  **Answer:** b) JSON.parse  
  **Explanation:** `JSON.parse` converts a JSON string into a JavaScript object, which is the reverse of what `JSON.stringify` does. This method is essential when working with data fetched from APIs.
</details>

### 5. What is the output of `console.log(typeof NaN);`?

a) "number"  
b) "NaN"  
c) "undefined"

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) "number"  
  **Explanation:** Despite representing a value that is "Not a Number," `NaN` is actually of the type `number` in JavaScript. This quirk is part of the language's design.
</details>

### 6. Which of the following is NOT a valid way to define a function in JavaScript?

a) Function declaration  
b) Function expression  
c) Arrow function  
d) Function constructor  
e) All are valid ways

<details>
  <summary>Show Answer</summary>
  
  **Answer:** e) All are valid ways  
  **Explanation:** JavaScript supports defining functions through declarations, expressions, arrow functions, and even using the Function constructor. Each method has its own characteristics and use cases.
</details>

### 7. Which of the following is true about the ternary operator in JavaScript?

a) It is a shorthand for an if-else statement.  
b) It can only return numeric values.  
c) It cannot be nested.  
d) It always requires parentheses.

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) It is a shorthand for an if-else statement.  
  **Explanation:** The ternary operator provides a concise way to choose one of two values based on a condition, effectively acting as a compact if-else. It can be nested, although that may reduce readability.
</details>

### 8. What does the spread operator (`...`) do in JavaScript?

a) Copies all properties from one object to another.  
b) Expands an iterable into individual elements.  
c) Combines two functions.

<details>
  <summary>Show Answer</summary>
  
  **Answer:** b) Expands an iterable into individual elements.  
  **Explanation:** The spread operator is used to expand elements of an array or the properties of an object into individual elements. It is very useful for merging arrays or objects and for function calls.
</details>

### 9. Which symbol is used to denote template literals in JavaScript?

a) Single quotes (' ')  
b) Double quotes (" ")  
c) Backticks (` `)  
d) Parentheses ( )

<details>
  <summary>Show Answer</summary>
  
  **Answer:** c) Backticks (` `)  
  **Explanation:** Template literals in JavaScript are enclosed in backticks, which enable embedded expressions and multi-line strings. This feature adds flexibility over traditional string literals.
</details>

### 10. Which of the following is a characteristic of an arrow function in JavaScript?

a) Arrow functions do not have their own `this`.  
b) Arrow functions cannot be anonymous.  
c) Arrow functions always require curly braces.  
d) Arrow functions are hoisted like function declarations.

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) Arrow functions do not have their own `this`.  
  **Explanation:** Arrow functions inherit the `this` value from their surrounding lexical scope rather than defining their own, which is very useful in certain contexts. This is one of the primary differences from traditional function expressions.
</details>

### 11. What will be the output of `console.log(0.1 + 0.2 === 0.3);`?

a) true  
b) false  
c) Error

<details>
  <summary>Show Answer</summary>
  
  **Answer:** b) false  
  **Explanation:** Due to floating point precision issues in JavaScript, the sum of 0.1 and 0.2 is not exactly 0.3. This is a common example used to illustrate numerical precision problems.
</details>

### 12. Which array method creates a new array with all elements that pass a specified test?

a) Array.prototype.filter  
b) Array.prototype.map  
c) Array.prototype.reduce  
d) Array.prototype.forEach

<details>
  <summary>Show Answer</summary>
  
  **Answer:** a) Array.prototype.filter  
  **Explanation:** The `filter` method iterates over an array and returns a new array containing only the elements that pass the test implemented by the provided function. It is commonly used for extracting a subset of data based on conditions.
</details>
