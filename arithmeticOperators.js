// Arithmetic Operators

// Addition
console.log(5 + 3); // Output: 8

// Subtraction
console.log(10 - 2); // Output: 8

// Multiplication
console.log(4 * 5); // Output: 20

// Division
console.log(20 / 4); // Output: 5

// Modulus
console.log(10 % 5); // Output: 1

console.log(10 ** 5);

// Increment and Decrement Operators

let x = 10;
x++; // Increment by 1
console.log(x); // Output: 11

x--; // Decrement by 1
console.log(x); // Output: 10

// Comparison Operators

console.log(10 > 5); // Output: true
console.log(10 < 5); // Output: false
console.log(10 >= 5); // Output: true
console.log(10 <= 5); // Output: false
console.log(10 == 5); // Output: false
console.log(10 != 5); // true

console.log('apple' === 'apple'); // Output: true

// "==" v/s "==="

let a = "10";                 // gets implicitly converted to number internally
let b = 10;
console.log(a == b); // Output: true, doesn't compare datatype, only checks data
console.log(a === b); // Output: false, Compares Datatypes

// Logical Operators

let i = true;
let j = false;

console.log(i && j); 
console.log(i || j);
console.log(!i);