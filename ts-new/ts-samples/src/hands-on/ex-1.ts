() => {
  // 1.
// we want to make a function that takes a name and returns a greeting
function greet(name) {
  return "Hello, " + name;
}

greet("Alice") // should be allowed
greet(123) // should not be allowed!

// 2. 
// we want to make a function that takes two numbers and returns the sum
function sum(a, b) {
  return a + b;
}

sum(5, 10) // should be allowed
sum(5, "10") // should not be allowed!

// 3. 
// we want to make a function that takes an array string and returns a string of the uppercase names joined by a comma
function getNames(names) {
  const modifiedNames = names.map(name => name.toUpperCase())
  return modifiedNames.join(", ");
}

getNames(["Alice", "Bob", "Charlie"]) // should be allowed
getNames(["Alice", "Bob", 123]) // should not be allowed!
getNames('baba mama') // should not be allowed!

// 4. 
// we want to make a function that takes an age and returns true if the age is greater than or equal to 18
function isAdult(age) {
  return age >= 18;
}

isAdult(20) // should be allowed
isAdult("20") // should not be allowed!

// 5.
// we want to make a function that takes a person and returns a string of the person's name and age
function displayPerson(preson) {
  return` User: ${preson.name}, Age: ${preson.age}`;
}

displayPerson({ name: "Alice", age: 25 }) // should be allowed
displayPerson({ name: "Alice", age: 25, gender: "female" }) // should be allowed
displayPerson({ name: "Alice" }) // should not be allowed!
displayPerson('Alice') // should not be allowed!


// 6. 
// we want to make a function that takes a number and a callback and returns the result of the callback
// the result of the callback is a number
// bonus: the result of the callback can any value (but don't use any! use a generic type)
function processNumber<T>(number: number , callback: (n: number) => T): T {
  return callback(number);
}

processNumber(5, n => n * 2) // callback returns a number
processNumber(5, n => String(n)) // callback returns a string (for the bonus)
processNumber(5, n => ({n})) // callback returns an object (for the bonus)

// 7.
// we want to make a function that takes two numbers and returns the product of the two numbers
// the second number is optional
function multiply(a, b) {
  if (b === undefined) {
    b = 1;
  }
  return a * b;
}

multiply(5) // should be allowed
multiply(5, 2) // should be allowed
multiply(5, 'baba') // should not be allowed! 

// 8. 
// we want to make a function that takes an value and returns the value as a modified string
// the value can be a string or a number
function printValue(value) {
  if () {
    return value.toUpperCase();
  } else {
    return value.toFixed();
  }
}

printValue("123") // should be allowed
printValue(123) // should be allowed
printValue(123.456) // should be allowed
printValue(true) // should not be allowed!

// 9. 
// we want to make a function that takes an array of products and returns an array of product names
function getProducts(products) {
  return products.map(product => product.name);
}

getProducts([{ name: "Laptop" }, { name: "Phone" }]) // should be allowed
getProducts([{ name: "Laptop"  , price: 1000 }]) // should be allowed
getProducts([{ id: "123" }]) // should not be allowed!



// 10. 
// we want to make a function that takes an user and returns the a name
// the user can have a first name or a first name and last name
type User= {}
function getFullName(user) {
  return user.lastName ? user.firstName + user.lastName : user.firstName;
}

getFullName({ firstName: "Alice" }) // should be allowed
getFullName({ firstName: "Alice", lastName: "Smith" }) // should be allowed
getFullName({ firstName: "Alice", lastName: "Smith", age: 25 }) // should not be allowed!

// 11. 
// we want to make a function that takes an array of a certain type and returns the first item
// the item should be a member (type) of the array
function getFirstItem<T>(arr: T[]) {
  return arr[0];
}

const firstNumber =  getFirstItem([1, 2, 3])
firstNumber.toFixed() // should be allowed
firstNumber.toUpperCase() // should not be allowed!

const firstString =  getFirstItem(["a", "b", "c"])
firstString.toUpperCase() // should be allowed
firstString.toFixed() // should not be allowed!


//12. 
function render() {
  const button = document.getElementById('btn')
  if (!button) return
  document.body.appendChild(button)
}

// 13.
function printStuff(obj: {x: string , y: number}) {
  console.log(obj.x)
  console.log(obj.y)
}

const a = { x: "baba", y: 17 }
const b = { x: "baba", y: 17, z: "mami" }
const c = { x: "baba" }


printStuff(a) // should be allowed
printStuff(b) // should be allowed
printStuff(c) // should not be allowed!

// 14.
// we want to make a function that takes an unknown value and logs something
// the function should be able to handle any value
// use type narrowing to handle the value
function doSomethingWithUnknown(value: unknown) {
  console.log(value.toUpperCase())
  console.log(value.toFixed())
  console.log(value.x)
  console.log(value.forEach(() => {}))
  console.log(value.getHours())
}

doSomethingWithUnknown (/* any value should be allowed */)

// 15.

}

type Obj = {
  a: string
  b: string
}

function returnObj1(): Obj {
  return {
    a: 'a',
    b: 'b',
    c: 'c'
  }
}
function returnObj2(): Obj {
  const obj = {
    a: 'a',
    b: 'b',
    password: 'c'
  }
  return obj
}

