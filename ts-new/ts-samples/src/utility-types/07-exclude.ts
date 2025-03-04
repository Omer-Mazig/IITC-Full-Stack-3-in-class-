/**
 * Exclude<UnionType, ExcludedMembers>
 *
 * Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
 * Works with union types, unlike Omit which works with object properties.
 */

// Original union type
type AllEventTypes =
  | "click"
  | "hover"
  | "focus"
  | "blur"
  | "keydown"
  | "keyup"
  | "submit"
  | "load"
  | "error";

// Using Exclude to create a type without mouse events
type NonMouseEvents = Exclude<AllEventTypes, "click" | "hover">;

// Using Exclude to create a type with only keyboard events
type KeyboardEvents = Exclude<
  AllEventTypes,
  Exclude<AllEventTypes, "keydown" | "keyup">
>;

function addKeyboardEventListener(
  element: HTMLElement,
  event: KeyboardEvents,
  handler: (e: Event) => void
): void {
  element.addEventListener(event, handler);
  console.log(`Added ${event} event listener to element`);
}

// This works because "keydown" is a KeyboardEvent
addKeyboardEventListener(document.body, "keydown", (e) =>
  console.log("Key down event")
);

// This would cause a type error because "click" is not a KeyboardEvent
// addKeyboardEventListener(document.body, "click", (e) => console.log("Click event")); // Error

// Another example with data types
type PrimitiveTypes =
  | string
  | number
  | boolean
  | null
  | undefined
  | symbol
  | bigint;

// Exclude null and undefined to create a type for valid values
type ValidPrimitives = Exclude<PrimitiveTypes, null | undefined>;

function processValue(value: ValidPrimitives): void {
  console.log(`Processing value of type: ${typeof value}`);
}

processValue("hello"); // Works
processValue(42); // Works
processValue(true); // Works
processValue(null); // Error: Argument of type 'null' is not assignable to parameter of type 'ValidPrimitives'
