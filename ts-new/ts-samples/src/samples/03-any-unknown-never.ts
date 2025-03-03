// -------------------- Any vs. Unknown vs. Never -------------------- //

// any:
// any means anything. so typescript will be ok with anything
// any means = "i don't want to play with Typescript any more..."
// when to use any? please, do not use any.
(() => {
  let anything: any;
  anything = undefined;
  anything = null;
  anything = 17;
  anything = "baba";
  anything = true;
  anything = { value: 42 };
  anything.toFixed();
  anything.toLowerCase();
  anything.map(() => {});
  anything.data = "baba";
  anything();
  [].map(anything);
})();

// unknown - all possible values
() => {
  // Sometimes we don’t know the type of our value.
  // in these cases, we should use 'unknown' and NOT 'any'

  let unknownValue: unknown;
  unknownValue.toFixed(); // only for numbers
  unknownValue.toLowerCase(); // only for strings
  unknownValue.map(() => {}); // only for arrays
  unknownValue.data = "baba"; // only for object with a key of 'data'

  // But now we can do anything with this value...
  // how should we solve this? be a responsible developer!

  if (typeof unknownValue === "number") {
    unknownValue.toFixed();
  }
  if (typeof unknownValue === "string") {
    unknownValue.toLowerCase();
  }
  if (Array.isArray(unknownValue)) {
    unknownValue.map(() => {});
  }

  if (
    unknownValue && // check for null (for some reason, null consider typeof object...)
    typeof unknownValue === "object" && // check if it is an object
    "data" in unknownValue // check if the key 'data' exist on this object
  ) {
    unknownValue.data = "baba";
  }

  // this is called "type narrowing". more on this later.
};

// never - no possible values
() => {
  let noValueCanBeHere: never = undefined; // Type 'undefined' is not assignable to type 'never'.
  noValueCanBeHere.toFixed(); // does not exist on type 'never'.
  noValueCanBeHere.toLowerCase(); // does not exist on type 'never'.
  noValueCanBeHere.map(() => {}); // does not exist on type 'never'.
  noValueCanBeHere.data = "baba"; // does not exist on type 'never'.

  if (typeof noValueCanBeHere === "number") {
    noValueCanBeHere.toFixed(); //does not exist on type 'never'.
  }
  if (typeof noValueCanBeHere === "string") {
    noValueCanBeHere.toLowerCase(); // does not exist on type 'never'.
  }
  if (Array.isArray(noValueCanBeHere)) {
    noValueCanBeHere.map(() => {}); // does not exist on type 'never'.
  }
  if (
    noValueCanBeHere &&
    typeof noValueCanBeHere === "object" &&
    "data" in noValueCanBeHere
  ) {
    noValueCanBeHere.data = "baba"; // does not exist on type 'never'.
  }
};
