function init() {
  const name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}

// init();

function createCounter() {
  let count = 0;

  function counter() {
    count++;
    return count;
  }

  return counter;
}

const counter_1 = createCounter();
const counter_2 = createCounter();

function createBox() {
  let value = 0;

  const box = {
    get() {
      return value;
    },
    set(newValue) {
      if (typeof newValue !== "number") {
        throw new Error("newValue must be a number");
      }
      value = newValue;
      return value;
    },
    inc() {
      value++;
      return value;
    },
  };

  return box;
}

const box_1 = createBox();
const box_2 = createBox();
