/**
 * ConstructorParameters<Type>
 *
 * Constructs a tuple or array type from the types of a constructor function.
 * This utility extracts the parameter types of a constructor function.
 */

// Define a class with a constructor
class Database {
  private connection: string;
  private username: string;
  private password: string;
  private database: string;
  private port: number;

  constructor(
    host: string,
    username: string,
    password: string,
    database: string,
    port: number = 3306
  ) {
    this.connection = `mysql://${host}:${port}`;
    this.username = username;
    this.password = password;
    this.database = database;
    this.port = port;

    console.log(`Connected to ${this.connection}/${this.database}`);
  }

  query(sql: string): any[] {
    console.log(`Executing query on ${this.database}: ${sql}`);
    return []; // Mock implementation
  }
}

// Using ConstructorParameters to get the parameter types of the constructor
type DatabaseConstructorParams = ConstructorParameters<typeof Database>;

// Function to create a database connection with the correct parameter types
function createDatabaseConnection(
  ...params: DatabaseConstructorParams
): Database {
  return new Database(...params);
}

// We can use this to create a database connection
const dbParams: DatabaseConstructorParams = [
  "localhost",
  "root",
  "password123",
  "my_app_db",
  3307,
];

const db = createDatabaseConnection(...dbParams);
db.query("SELECT * FROM users");

// Another example with a class that has a complex constructor
class HttpClient {
  constructor(
    baseUrl: string,
    options: {
      headers?: Record<string, string>;
      timeout?: number;
      retries?: number;
      auth?: { username: string; password: string };
    } = {}
  ) {
    console.log(`Created HTTP client for ${baseUrl}`);
  }

  get(path: string): Promise<any> {
    return Promise.resolve({});
  }
}

// Using ConstructorParameters to get the parameter types
type HttpClientConstructorParams = ConstructorParameters<typeof HttpClient>;

// Create a factory function
function createApiClient(...params: HttpClientConstructorParams): HttpClient {
  return new HttpClient(...params);
}

// Use the factory function
const apiClient = createApiClient("https://api.example.com", {
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
  retries: 3,
});

// This is equivalent to:
// type DatabaseConstructorParams = [
//   host: string,
//   username: string,
//   password: string,
//   database: string,
//   port?: number
// ];
