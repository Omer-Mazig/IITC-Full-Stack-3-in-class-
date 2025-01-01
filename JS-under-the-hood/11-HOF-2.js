// HOF - Higher Order Function
// funtion that return another function

function add1(number) {
  return number + 1;
}
function add2(number) {
  return number + 2;
}
function add3(number) {
  return number + 3;
}

function makeAdder(numberToAdd) {
  return (number) => numberToAdd + number;
}

const add4 = makeAdder(4);
//  (number) => 4 + number;

const add5 = makeAdder(5);
//  (number) => 5 + number;

// console.log(add5(19));
// console.log(add5(49));

// console.log(add4(1));

function sandwichMaker(breadType) {
  return (filling) => {
    const res = breadType + " and " + filling;
    return res;
  };
}

const shifonAnd = sandwichMaker("Shifon");
//  (breadType) => Shifon + breadType;

const s1 = shifonAnd("Cheese"); // Shifon and cheese
const s2 = shifonAnd("Mustard"); // Shifon and mustard
console.log("Yammii", s1, "|", s2);

const halaAnd = sandwichMaker("Hala");
const s3 = halaAnd("Honey");
const s4 = halaAnd("Hummus");
console.log("Yammii", s3, "|", s4);
