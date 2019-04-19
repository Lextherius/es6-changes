/*
This example would not give you an error but instead show undefined.
This is because of something call variable hoisting

JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.

Hoisting is JavaScript's default behavior of moving all declarations to the top of 
the current scope (to the top of the current script or the current function).
*/

if(false)
{
    var example = 5;
}

console.log(example);