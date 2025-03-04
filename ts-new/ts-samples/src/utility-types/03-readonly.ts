() => {
  /**
   * Readonly<Type>
   *
   * Constructs a type with all properties of Type set to readonly,
   * meaning the properties cannot be reassigned once initialized.
   */

  // Original interface
  interface Config {
    apiKey: string;
    endpoint: string;
    timeout: number;
    retries: number;
  }

  // Using Readonly to make all properties immutable
  function initializeApp(config: Readonly<Config>): void {
    // This would cause a type error because we can't modify readonly properties
    config.timeout = 5000; // Error: Cannot assign to 'timeout' because it is a read-only property

    console.log(`App initialized with endpoint: ${config.endpoint}`);
    console.log(`Timeout set to: ${config.timeout}ms`);
  }

  const appConfig: Config = {
    apiKey: "abc123xyz789",
    endpoint: "https://api.example.com/v1",
    timeout: 3000,
    retries: 3,
  };

  // We can modify the original config object
  appConfig.timeout = 5000;
  console.log(`Modified timeout: ${appConfig.timeout}`);

  // But when passed to initializeApp, it becomes readonly
  initializeApp(appConfig);

  // We can also create an explicitly readonly object
  const readonlyConfig: Readonly<Config> = {
    apiKey: "secure-key-123",
    endpoint: "https://secure-api.example.com/v2",
    timeout: 2000,
    retries: 5,
  };

  // This would cause a type error
  // readonlyConfig.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property

  // This is equivalent to creating a new type with all readonly properties:
  type ReadonlyConfig = {
    readonly apiKey: string;
    readonly endpoint: string;
    readonly timeout: number;
    readonly retries: number;
  };
};
