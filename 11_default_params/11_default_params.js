function add(numArray = []) //default param, just like the rest of the programming language
{
    let total = 0;
    numArray.forEach((element) => {
        total += element;
    });

    console.log(total);
}

add();