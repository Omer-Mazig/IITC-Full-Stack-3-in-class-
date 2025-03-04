/**
 * InstanceType<Type>
 *
 * Constructs a type consisting of the instance type of a constructor function in Type.
 * Useful for getting the type of an instance from a class constructor.
 */

// Define a class
class User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }

  getDisplayName() {
    return `${this.name} (${this.email})`;
  }
}

// Using InstanceType to get the type of User instances
type UserInstance = InstanceType<typeof User>;

// Function that works with User instances
function updateUserStatus(user: UserInstance, isActive: boolean): UserInstance {
  user.isActive = isActive;
  return user;
}

const johnDoe = new User(1, "John Doe", "john@example.com");
updateUserStatus(johnDoe, false);
console.log(`${johnDoe.name} is ${johnDoe.isActive ? "active" : "inactive"}`);

// Another example with a generic class
class DataContainer<T> {
  data: T;
  createdAt: Date;

  constructor(data: T) {
    this.data = data;
    this.createdAt = new Date();
  }

  getData(): T {
    return this.data;
  }

  updateData(newData: T): void {
    this.data = newData;
  }
}

// Get the instance type for a specific type of DataContainer
type StringContainer = InstanceType<typeof DataContainer<string>>;

// Create a factory function that returns the correct instance type
function createStringContainer(initialValue: string): StringContainer {
  return new DataContainer<string>(initialValue);
}

const nameContainer = createStringContainer("John");
nameContainer.updateData("Jane");
console.log(nameContainer.getData()); // "Jane"

// This is equivalent to:
// type UserInstance = {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
//   deactivate(): void;
//   getDisplayName(): string;
// };
