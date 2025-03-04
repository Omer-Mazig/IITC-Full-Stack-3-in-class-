/**
 * Omit<Type, Keys>
 *
 * Constructs a type by picking all properties from Type and then removing Keys.
 * The opposite of Pick.
 */

// Original interface
interface Employee {
  id: number;
  name: string;
  email: string;
  salary: number;
  socialSecurityNumber: string;
  bankAccountNumber: string;
  address: string;
  phoneNumber: string;
  department: string;
  hireDate: Date;
}

// Using Omit to create a public employee profile without sensitive information
type PublicEmployeeProfile = Omit<
  Employee,
  "salary" | "socialSecurityNumber" | "bankAccountNumber"
>;

function displayEmployeeDirectory(employees: PublicEmployeeProfile[]): void {
  employees.forEach((employee) => {
    console.log(`
      Name: ${employee.name}
      Email: ${employee.email}
      Department: ${employee.department}
      Phone: ${employee.phoneNumber}
    `);
  });
}

const employee1: PublicEmployeeProfile = {
  id: 101,
  name: "Alice Johnson",
  email: "alice@company.com",
  address: "123 Main St, Anytown, USA",
  phoneNumber: "555-123-4567",
  department: "Engineering",
  hireDate: new Date("2020-03-15"),
};

// Using Omit to create a type for updating an employee (omitting id which shouldn't be changed)

function updateEmployee(updates: Partial<Omit<Employee, "id">>): void {
  const id = 1;
  console.log(`Updating employee ${id} with:`, updates);
}

updateEmployee({
  id: 101,
  salary: 85000,
  department: "Senior Engineering",
});

type Todo = {
  id: string;
  txt: string;
  completed: boolean;
};

function addTodo(values: Omit<Todo, "id">) {
  // imagne we sending the values to our backend
  // database will generate id
}

addTodo({ txt: "do somthing", completed: false });
