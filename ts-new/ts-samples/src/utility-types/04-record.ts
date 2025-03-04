() => {
  /**
   * Record<Keys, Type>
   *
   * Constructs an object type whose property keys are Keys and whose property values are Type.
   * This utility can be used to map the properties of a type to another type.
   */

  // Using string literal union for keys
  type Role = "admin" | "user" | "guest";
  type Permissions = "create" | "read" | "update" | "delete";

  // Using Record to create a type with specific keys and value types
  type RolePermissions = Record<Role, Permissions[]>;

  const permissions: RolePermissions = {
    admin: ["create", "read", "update", "delete"],
    user: ["read", "update"],
    guest: ["read", "jjlksdjlis"],
  };

  console.log(`Admin permissions: ${permissions.admin.join(", ")}`);
  console.log(`User permissions: ${permissions.user.join(", ")}`);
  console.log(`Guest permissions: ${permissions.guest.join(", ")}`);

  // Using Record with string keys
  type UserDatabase = Record<
    PropertyKey,
    { name: string; email: string; lastLogin: Date }
  >;

  const users: UserDatabase = {
    user_1: {
      name: "John Doe",
      email: "john@example.com",
      lastLogin: new Date("2023-01-15"),
    },
    user_2: {
      name: "Jane Smith",
      email: "jane@example.com",
      lastLogin: new Date("2023-02-20"),
    },
    user_3: {
      name: "Jane Smith",
      email: "jane@example.com",
      lastLogin: "2023-02-20",
    },
  };

  // We can access users by their ID
  console.log(`User 1: ${users["user_1"].name}`);

  // Using Record with numeric keys
  type Scores = Record<number, string>;

  const gameScores: Scores = {
    100: "Poor",
    200: "Average",
    300: "Good",
    400: "Excellent",
    nana: "alkjsal",
  };

  console.log(`Score 300 is rated as: ${gameScores[300]}`);
};
