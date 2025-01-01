// HOF - Higher Order Function
// funtion that takes a function (callback) as an argument

const numbers = [1, 2, 3, 4, 5];
const strings = ["higher", "order", "function"];

function getDoubles(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] + arr[i]);
  }

  return res;
}

function getSquares(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * arr[i]);
  }

  return res;
}

function getUpperCases(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].toUpperCase());
  }

  return res;
}

function mapArrayToValues(arr, callback) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i));
  }

  return res;
}

const upperCases = mapArrayToValues(strings, (string, index) => {
  return string.toUpperCase() + index;
});

console.log(upperCases);

const doubles = mapArrayToValues(numbers, (number) => {
  return number + number;
});

console.log(doubles);

const squares = mapArrayToValues(numbers, (number) => {
  return number * number;
});

console.log(squares);

const toggledBooleans = mapArrayToValues([true, false, false], (bool) => {
  return !bool;
});

console.log(toggledBooleans);
