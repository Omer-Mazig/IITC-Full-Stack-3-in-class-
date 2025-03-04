() => {
  /**
   * Partial<Type>
   *
   * Constructs a type with all properties of Type set to optional.
   * This utility is useful when you want to update an object but only need to provide some properties.
   */

  // Original interface
  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
    isActive: boolean;
    deactivate(): void;
    getDisplayName(): string;
  };

  // Using Partial to make all properties optional
  function updateUser(user: User, updates: Partial<User>): User {
    const updatedUser = { ...user, ...updates };
    return updatedUser;
  }

  // Example usage
  const john: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    isAdmin: false,
    isActive: true,
    deactivate() {
      this.isActive = false;
    },
    getDisplayName() {
      return `${this.name} <${this.email}>`;
    },
  };

  // We only need to provide the properties we want to update
  const updatedJohn = updateUser(john, {
    age: 31,
    email: "john.doe@example.com",
    isActive: false,
  });

  // This is equivalent to creating a new type with all optional properties:
  type PartialUser = {
    id?: number;
    name?: string;
    email?: string;
    age?: number;
    isAdmin?: boolean;
    isActive?: boolean;
    deactivate?(): void;
    getDisplayName?(): string;
  };
};
