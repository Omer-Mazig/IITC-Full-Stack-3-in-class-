function sayAge(age, baba, amam) {
  return `is ${age}`;
}

console.log(sayAge(19));

const sayThatAgeIs19 = sayAge.bind(null, 19);
console.log(sayThatAgeIs19());

console.log(sayAge.call(null, 18, 10, 19));
sayAge(50);

console.log(sayAge.apply(null, [18, 10, 19]));
