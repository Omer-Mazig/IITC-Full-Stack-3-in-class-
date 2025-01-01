const person = {
  name: "baba",
  age: 14,
};

function incrementAge(p) {
  return { ...p, age: p.age + 1 };
}

const newPerson = incrementAge(person);

// console.log(person);
// console.log(newPerson);

const numbers = [1, 2, 3];

function getDoubles(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

console.log("numbers", numbers);
const doubles = getDoubles(numbers);
console.log("doubles", doubles);
console.log("numbers", numbers);
