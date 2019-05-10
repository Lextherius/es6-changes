import { Animal, Lion } from './animal.js';

let dog = new Animal('Dog', 4);

//usualy the class
console.log(dog);
console.log(dog.type);
console.log(dog.legs);

//changing value
dog.legs = 3;
console.log(`The legs value have been changed to ${dog.legs}`);

//using a function within the class
dog.makeNoise('Bark');

//static allow us to create a function in our class where we don't have to create an instance of the class to use it
console.log(Animal.crap());

//get methods, property that only to return a value.
console.log(dog.metaData);

//call the extended class
let lion = new Lion('Lion', 4, true);
lion.makeNoise();
console.log(lion.metaData);
