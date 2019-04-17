/*
Spread Operator...
Unwrapping values of example1 into example2
It is not pass by reference.
It is instantiating a new array;
*/

let example1 = [1,2,3,4,5,6];
let example2 = [...example1];
example2.push(true);

console.log(`eg. 1: ${example1}`);
console.log(`eg. 2: ${example2}`);