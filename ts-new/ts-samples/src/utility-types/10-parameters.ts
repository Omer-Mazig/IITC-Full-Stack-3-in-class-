/**
 * Parameters<Type>
 *
 * Constructs a tuple type from the types used in the parameters of a function type Type.
 * Useful for capturing and reusing parameter types.
 */

// Original function
function createUser(
  id: number,
  name: string,
  email: string,
  isAdmin: boolean = false
): { id: number; name: string; email: string; isAdmin: boolean } {
  return { id, name, email, isAdmin };
}

// Using Parameters to get the parameter types as a tuple
type CreateUserParams = Parameters<typeof createUser>;

// We can use this type for variables that should match the function parameters
const userParams: CreateUserParams = [1, "John Doe", "john@example.com"];

// And then spread them when calling the function
const createdUser = createUser(...userParams);
console.log(createdUser);

// Another example with event handlers
function handleClick(
  event: MouseEvent,
  timestamp: number,
  userId: string
): void {
  console.log(
    `Click by user ${userId} at ${timestamp}: ${event.clientX}, ${event.clientY}`
  );
}

type ClickHandlerParams = Parameters<typeof handleClick>;

// Mock event for testing
const mockEvent = { clientX: 100, clientY: 200 } as MouseEvent;
const mockParams: ClickHandlerParams = [mockEvent, Date.now(), "user_123"];

// Call the handler with the mock parameters
handleClick(...mockParams);

// Using Parameters with generic functions
function fetchApiData<T>(
  url: string,
  options?: { method: string; headers?: Record<string, string> }
): Promise<T> {
  return fetch(url, options).then((res) => res.json());
}

// Get the parameters excluding the generic type parameter
type FetchApiDataParams = Parameters<typeof fetchApiData>;

// We can use this type for our API calls
const apiCallParams: FetchApiDataParams = [
  "https://api.example.com/users",
  { method: "GET", headers: { Authorization: "Bearer token123" } },
];

// This is equivalent to:
// type CreateUserParams = [id: number, name: string, email: string, isAdmin?: boolean];
// type ClickHandlerParams = [event: MouseEvent, timestamp: number, userId: string];
// type FetchApiDataParams = [url: string, options?: { method: string; headers?: Record<string, string> }];
