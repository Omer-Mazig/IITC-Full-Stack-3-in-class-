/**
 * Extract<Type, Union>
 *
 * Constructs a type by extracting from Type all union members that are assignable to Union.
 * The opposite of Exclude.
 */

// Original union type
type ResponseStatus =
  | "success"
  | "error"
  | "loading"
  | "idle"
  | "unauthorized"
  | "forbidden"
  | "not_found"
  | "timeout";

// Using Extract to create a type with only error states
type ErrorStatus = Extract<
  ResponseStatus,
  "error" | "unauthorized" | "forbidden" | "not_found" | "timeout"
>;

function handleErrorState(status: ErrorStatus): void {
  switch (status) {
    case "error":
      console.log("A general error occurred");
      break;
    case "unauthorized":
      console.log("User is not authenticated");
      break;
    case "forbidden":
      console.log("User does not have permission");
      break;
    case "not_found":
      console.log("Resource not found");
      break;
    case "timeout":
      console.log("Request timed out");
      break;
  }
}

// This works because "unauthorized" is an ErrorStatus
handleErrorState("unauthorized");

// This would cause a type error because "success" is not an ErrorStatus
// handleErrorState("success"); // Error

// Another example with object types
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

// Extract only the shapes with a height property
type ShapesWithHeight = Extract<Shape, { height: number }>;

function calculateArea(shape: ShapesWithHeight): number {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else {
    // Must be a triangle
    return 0.5 * shape.base * shape.height;
  }
}

const rectangle: ShapesWithHeight = { kind: "rectangle", width: 10, height: 5 };
const triangle: ShapesWithHeight = { kind: "triangle", base: 8, height: 6 };

console.log(`Rectangle area: ${calculateArea(rectangle)}`);
console.log(`Triangle area: ${calculateArea(triangle)}`);

// This would cause a type error because circle doesn't have a height property
// const circle: ShapesWithHeight = { kind: "circle", radius: 5 }; // Error

// This is equivalent to:
// type ErrorStatus = "error" | "unauthorized" | "forbidden" | "not_found" | "timeout";
// type ShapesWithHeight = { kind: "rectangle"; width: number; height: number } | { kind: "triangle"; base: number; height: number };
