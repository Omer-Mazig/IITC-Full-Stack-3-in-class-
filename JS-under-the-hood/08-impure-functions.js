let x = 10;

function sum(number) {
  return number + x;
}

// console.log(sum(20));
x++;
// console.log(sum(20));

function getValue(y) {
  return y + Math.random();
}

// console.log(getValue(1));
// console.log(getValue(1));

let y = 30;
function doSomthing() {
  y++;
}

const person = {
  name: "baba",
  age: 14,
};

function incrementAge(p) {
  p.age++;
}

// console.log(person);
// incrementAge(person);
// console.log(person);

function doStuff() {
  document.addEventListener("click", () => {});
}

function doStuff_2() {
  console.log("hi");
}

const numbers = [1, 2, 3];

function getDoubles(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
}

// console.log(numbers);
// getDoubles(numbers);
// console.log(numbers);
