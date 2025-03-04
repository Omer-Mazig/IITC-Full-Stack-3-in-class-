/**
 * String Manipulation Utility Types
 *
 * TypeScript includes several utility types for manipulating string literal types:
 * - Uppercase<StringType>
 * - Lowercase<StringType>
 * - Capitalize<StringType>
 * - Uncapitalize<StringType>
 */

// Uppercase<StringType>
// Converts each character in the string to uppercase
type Greeting = "hello world";
type ShoutedGreeting = Uppercase<Greeting>; // "HELLO WORLD"

// Example usage with event types
type EventName = "click" | "hover" | "focus";
type EventConstant = Uppercase<EventName>; // "CLICK" | "HOVER" | "FOCUS"

// Using Uppercase for creating enum-like constants
const EVENTS: Record<EventConstant, string> = {
  CLICK: "User clicked an element",
  HOVER: "User hovered over an element",
  FOCUS: "Element received focus",
};

// Lowercase<StringType>
// Converts each character in the string to lowercase
type CommandName = "SAVE" | "LOAD" | "EXIT";
type CommandFunction = Lowercase<CommandName>; // "save" | "load" | "exit"

// Using Lowercase for mapping command names to function names
function executeCommand(command: CommandName): void {
  const functionName = command.toLowerCase() as CommandFunction;
  console.log(`Executing ${functionName} command`);
}

executeCommand("SAVE");

// Capitalize<StringType>
// Converts the first character in the string to uppercase
type PropertyName = "name" | "age" | "email";
type GetterName = `get${Capitalize<PropertyName>}`; // "getName" | "getAge" | "getEmail"

// Using Capitalize for creating getter method names
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonGetters = {
  [K in GetterName]: () => Person[Lowercase<
    K extends `get${infer R}` ? R : never
  >];
};

const personGetters: PersonGetters = {
  getName: () => "John Doe",
  getAge: () => 30,
  getEmail: () => "john@example.com",
};

console.log(personGetters.getName());

// Uncapitalize<StringType>
// Converts the first character in the string to lowercase
type ClassName = "User" | "Product" | "Order";
type InstanceName = Uncapitalize<ClassName>; // "user" | "product" | "order"

// Using Uncapitalize for creating instance variable names
function createInstance<T extends ClassName>(
  className: T
): { [K in Uncapitalize<T>]: any } {
  const instance = {
    /* create instance logic */
  };
  return {
    [className.charAt(0).toLowerCase() + className.slice(1)]: instance,
  } as any;
}

const { user: userInstance } = createInstance("User");
console.log(`Created instance: ${userInstance}`);

// Combining string manipulation utilities
type ApiRoute = "users" | "products" | "orders";
type ApiConstant = `API_${Uppercase<ApiRoute>}`; // "API_USERS" | "API_PRODUCTS" | "API_ORDERS"
type ApiMethod = `get${Capitalize<ApiRoute>}`; // "getUsers" | "getProducts" | "getOrders"

// Using combined utilities for API configuration
const API_CONSTANTS: Record<ApiConstant, string> = {
  API_USERS: "/api/v1/users",
  API_PRODUCTS: "/api/v1/products",
  API_ORDERS: "/api/v1/orders",
};

const apiMethods: Record<ApiMethod, () => Promise<any>> = {
  getUsers: async () =>
    fetch(API_CONSTANTS.API_USERS).then((res) => res.json()),
  getProducts: async () =>
    fetch(API_CONSTANTS.API_PRODUCTS).then((res) => res.json()),
  getOrders: async () =>
    fetch(API_CONSTANTS.API_ORDERS).then((res) => res.json()),
};
