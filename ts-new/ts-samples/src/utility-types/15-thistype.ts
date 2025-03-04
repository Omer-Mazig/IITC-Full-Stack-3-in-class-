/**
 * ThisType<Type>
 *
 * This utility doesn't return a transformed type. Instead, it serves as a marker for a contextual 'this' type.
 * Note that the --noImplicitThis flag must be enabled to use this utility.
 */

// Basic example of ThisType
interface Logger {
  log(message: string): void;
}

// Define a mixin that adds logging capabilities
const loggerMixin = {
  log(message: string) {
    console.log(`[LOG] ${message}`);
  },
  error(message: string) {
    console.error(`[ERROR] ${message}`);
  },
  debug(message: string) {
    console.log(`[DEBUG] ${this.name}: ${message}`);
  },
};

// Define a type for our component
interface Component {
  name: string;
  initialize(): void;
}

// Create a component with the logger mixin
// ThisType<Component> tells TypeScript that 'this' in the methods refers to Component
const component: Component & ThisType<Component & typeof loggerMixin> = {
  name: "MyComponent",
  initialize() {
    this.log(`Component ${this.name} initialized`);
    this.debug("Starting up...");
  },
};

// Combine the component with the logger mixin
const enhancedComponent = { ...component, ...loggerMixin };
enhancedComponent.initialize();

// More complex example with a state management system
interface State {
  count: number;
  message: string;
}

interface StateMethodsThis {
  state: State;
  commit(state: Partial<State>): void;
}

// Define methods that operate on the state
const methods = {
  increment() {
    // 'this' is typed as StateMethodsThis
    this.commit({ count: this.state.count + 1 });
  },
  decrement() {
    this.commit({ count: this.state.count - 1 });
  },
  setMessage(message: string) {
    this.commit({ message });
  },
  getCountMessage() {
    return `Current count: ${this.state.count}`;
  },
} as ThisType<StateMethodsThis>; // Mark that 'this' in methods refers to StateMethodsThis

// Create a store factory
function createStore(initialState: State) {
  const state: State = { ...initialState };

  // Create the store object with state and methods
  const store = {
    state,
    commit(newState: Partial<State>) {
      Object.assign(state, newState);
      console.log("State updated:", state);
    },
    ...methods,
  };

  return store;
}

// Create and use a store
const store = createStore({ count: 0, message: "Hello" });
store.increment();
store.setMessage("Count incremented");
console.log(store.getCountMessage());

// Without ThisType, TypeScript wouldn't know that 'this' in methods
// has access to the state and commit properties
