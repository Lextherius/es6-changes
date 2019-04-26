/*
padStart() give us a way to add values to the start of a string depending on how long the string is
padEnd() give us a way to add values to the end of a string depending on how long the string is

Example 1 shows that it is padded with 6 characters
Example 2 shows that it is padded with 2 characters
Example 3 shows that no padding happens because the targetLength is less than the string
*/

let example1 = 'Howson';
console.log(`\r\n====================================\r\nFirst Example : ${example1}\r\n====================================`);
console.log(example1.padStart(12, 'a'));
console.log(example1.padEnd(12, 'a'));

let example2 = 'Howson Lex';
console.log(`\r\n====================================\r\nSecond Example : ${example2}\r\n====================================`);
console.log(example2.padStart(12, 'a'));
console.log(example2.padEnd(12, 'a'));

let example3 = 'Howson Super Lex';
console.log(`\r\n====================================\r\nThird Example : ${example3}\r\n====================================`);
console.log(example3.padStart(12, 'a'));
console.log(example3.padEnd(12, 'a'));