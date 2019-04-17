/*
What is rest operator? ...
It gives us the ability to get the argument out of a function.
It is used in the case where we don't know how many inputs are going to be used.

arguments have been deprecated unofficially
*/

function add(...nums){          //rest operator
    //console.log(arguments);
    console.log(nums);
}

add(4,5,7,8,12)