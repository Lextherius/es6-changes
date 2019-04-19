/*
Let is a stricter version of var and it uses block=scope
Hence this example would give us an error.
*/
if(false)
{
    let example = 5;
}

console.log(example);