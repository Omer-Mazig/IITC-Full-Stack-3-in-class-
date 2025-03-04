/**
 * NonNullable<Type>
 *
 * Constructs a type by excluding null and undefined from Type.
 * Useful for ensuring values are defined before using them.
 */

// Original type that might include null or undefined
type UserInput = string | number | null | undefined;

// Using NonNullable to create a type without null or undefined
type ValidUserInput = NonNullable<UserInput>;

function processUserInput(input: UserInput): ValidUserInput {
  // Check if input is null or undefined
  if (input === null || input === undefined) {
    // Provide a default value
    return "No input provided";
  }

  return input; // TypeScript knows this is now a ValidUserInput (string | number)
}

const userInputs: UserInput[] = ["hello", 42, null, undefined, "world"];

userInputs.forEach((input) => {
  const processedInput = processUserInput(input);
  console.log(`Processed input: ${processedInput}`);
});

// Another example with a function that might return null
type MaybeUser = { id: number; name: string } | null;

function findUser(id: number): MaybeUser {
  // Simulate database lookup
  if (id === 1) {
    return { id: 1, name: "John Doe" };
  }
  return null; // User not found
}

// Using NonNullable to ensure we have a valid user
function displayUserProfile(user: NonNullable<MaybeUser>): void {
  console.log(`User Profile: ${user.name} (ID: ${user.id})`);
}

const user = findUser(1);

// We need to check if user is not null before calling displayUserProfile
if (user !== null) {
  displayUserProfile(user);
} else {
  console.log("User not found");
}

// This is equivalent to:
// type ValidUserInput = string | number;
// type NonNullableUser = { id: number; name: string };
