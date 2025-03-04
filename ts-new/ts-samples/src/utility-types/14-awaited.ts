/**
 * Awaited<Type>
 *
 * This type is meant to model operations like await in async functions,
 * or the .then() method on Promises - specifically, the way they recursively unwrap Promises.
 */

// A simple Promise that resolves to a string
type SimplePromise = Promise<string>;

// Using Awaited to get the type that the Promise resolves to
type UnwrappedSimplePromise = Awaited<SimplePromise>; // string

// Function that returns a Promise
async function fetchUserName(id: number) {
  // Simulate API call
  return `user_${id}`;
}

// Using the Awaited type to specify the return type of an async function
function displayUserName(
  userName: Awaited<ReturnType<typeof fetchUserName>>
): void {
  console.log(`User name: ${userName}`);
}

// Usage
async function main() {
  const userName = await fetchUserName(123);
  displayUserName(userName);
}

// Nested Promises
type NestedPromise = Promise<Promise<Promise<number>>>;

// Awaited recursively unwraps all the Promise layers
type UnwrappedNestedPromise = Awaited<NestedPromise>; // number

// Function that returns a nested Promise
async function getNestedData(): Promise<Promise<{ data: number[] }>> {
  return Promise.resolve({ data: [1, 2, 3] });
}

// Using Awaited to handle nested Promises
async function processNestedData() {
  const result: Awaited<ReturnType<typeof getNestedData>> =
    await getNestedData();
  console.log(`Data: ${result.data.join(", ")}`);
}

// Awaited also works with union types
type PossibleResponses = Promise<string> | Promise<number> | string;

// This unwraps all the Promises in the union
type UnwrappedResponses = Awaited<PossibleResponses>; // string | number

// Function that might return different types of Promises
function fetchData(type: "text" | "number"): Promise<string> | Promise<number> {
  if (type === "text") {
    return Promise.resolve("some text");
  } else {
    return Promise.resolve(42);
  }
}

// Using Awaited with the union return type
async function processData(type: "text" | "number") {
  const data: Awaited<ReturnType<typeof fetchData>> = await fetchData(type);

  // TypeScript knows data can be either string or number
  if (typeof data === "string") {
    console.log(`Text data: ${data.toUpperCase()}`);
  } else {
    console.log(`Numeric data: ${data.toFixed(2)}`);
  }
}

// This is equivalent to:
// type UnwrappedSimplePromise = string;
// type UnwrappedNestedPromise = number;
// type UnwrappedResponses = string | number;
