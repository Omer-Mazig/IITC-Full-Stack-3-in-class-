// -------------------- Type Casting -------------------- //
// Type casting is a way to tell TypeScript that a value is of a certain type
// it basically tells typescript that we know better than the compiler, typescript will always trust us
/*
 * IMPORTANT: This could be dangerous.
 * We could be wrong and tell typescript that a value is of a certain type.
 * But it is could be something else.
 * So, please, for the love of god, use it with caution.
 */

(() => {
  const myInput = document.getElementById("myInput") as HTMLInputElement;

  myInput.value = "Hello"; // not all HTML elements have a value, but HTMLInputElement does.

  // This is generally safe because we know the element with id 'myInput' is an input
  // Without the cast, TypeScript would only know it's an HTMLElement.
  // It is important to note that we dont have to cast to HTMLInputElement, it generally better to do a type guard (runtime check).
})();

// A better way to do this is to check if the element is null
(() => {
  const myInput = document.getElementById("myInput");

  if (myInput === null) {
    throw new Error("Input not found");
  }

  if (myInput instanceof HTMLInputElement) {
    myInput.value = "Hello";
  } else {
    throw new Error("Input is not an HTMLInputElement");
  }
})();

// Here we just lying to Typescript... please, do not do this...
(() => {
  let x = "hello";

  let y = x as unknown as number;

  y.toFixed(2);
})();

() => {
  let arr = [1, 2, 3];
  const a = arr.pop()!;
};
