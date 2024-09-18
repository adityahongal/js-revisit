// Implicit type conversion

result = '3' + 2;
console.log(result); // Output: 32
console.log(typeof result); // Output:string all gets converted to string

result1 = '3' - true;          // true is counted as 1
console.log(result1);          // output will be 2,which is a number
console.log(typeof result1); 