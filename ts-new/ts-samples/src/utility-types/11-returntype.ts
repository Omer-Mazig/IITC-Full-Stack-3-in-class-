/**
 * ReturnType<Type>
 *
 * Constructs a type consisting of the return type of function Type.
 * Useful for reusing the return type of a function without duplicating its type definition.
 */

// Original function that returns a complex object
function getUserInfo(userId: string) {
  return {
    id: userId,
    name: "John Doe",
    email: "john@example.com",
    preferences: {
      theme: "dark",
      notifications: true,
      language: "en",
    },
    roles: ["user", "editor"],
    lastLogin: new Date(),
  };
}

// Using ReturnType to capture the return type
type UserInfo = ReturnType<typeof getUserInfo>;

// Now we can use this type elsewhere without duplicating the structure
function updateUserPreferences(
  user: UserInfo,
  newPreferences: Partial<UserInfo["preferences"]>
): UserInfo {
  return {
    ...user,
    preferences: {
      ...user.preferences,
      ...newPreferences,
    },
  };
}

const userInfo = getUserInfo("123");
const updatedUser = updateUserPreferences(userInfo, { theme: "light" });

console.log(updatedUser.preferences.theme); // "light"

// Another example with a function that returns a union type
function fetchStatus(endpoint: string): "success" | "error" | "loading" {
  // Simulate API call
  const random = Math.random();
  if (random < 0.7) return "success";
  if (random < 0.9) return "error";
  return "loading";
}

// Using ReturnType to get the possible status values
type FetchStatus = ReturnType<typeof fetchStatus>;

function handleStatus(status: FetchStatus): void {
  switch (status) {
    case "success":
      console.log("Data loaded successfully");
      break;
    case "error":
      console.log("Error loading data");
      break;
    case "loading":
      console.log("Loading data...");
      break;
  }
}

const currentStatus = fetchStatus("/api/users");
handleStatus(currentStatus);

// Using ReturnType with generic functions
function createState<T>(initial: T) {
  let value = initial;
  return {
    get: () => value,
    set: (newValue: T) => {
      value = newValue;
    },
    reset: () => {
      value = initial;
    },
  };
}

// Get the return type of createState when used with a string
type StringState = ReturnType<typeof createState<string>>;

const nameState: StringState = createState("John");
nameState.set("Jane");
console.log(nameState.get()); // "Jane"
