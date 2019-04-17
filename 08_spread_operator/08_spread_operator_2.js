//use in constructor when it comes to typescript
//sometimes to have default value when it doesn't comes from the backend

let example1 = {
    firstName: 'Howson'
};

let example2 = {
    firstName : 'NA',
    ...example1
};

console.log(example2);