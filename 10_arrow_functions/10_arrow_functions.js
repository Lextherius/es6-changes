
/*
Arrow functions is a great way to eliminate some of the really unnecessary boiler plate of callback functions
It comes with a lot of functionality and some gotchas
*/

function add(...nums){
    let total = nums.reduce((x,y) => {

        console.log(`x : ${x}`);
        console.log(`y : ${y}`);

        return x+y;
    });

    console.log(total);
}

add(4,5,7,8,12);