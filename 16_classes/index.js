import { Animal } from './animal.js';

let dog = new Animal('Dog', 4);

console.log(dog);
console.log(dog.type);
console.log(dog.legs);

dog.legs = 3;
console.log(`The legs value have been changed to ${dog.legs}`);

dog.makeNoise('Bark');