const exampleSet = new Set([1,1,1,1,2,2,2,2]);
console.log('Original set size');
console.log(exampleSet.size);
console.log('================================================');


//size doesn't change because value already exist
exampleSet.add(2);
console.log(`size doesn't change because value already exist`);
console.log(exampleSet.size);
console.log('================================================');

//size change to 3, value 5 is added into the set
exampleSet.add(5);
console.log(`size change to 3, value 5 is added into the set`);
console.log(exampleSet.size);
console.log('================================================');

//size goes back to 2, value 5 is deleted from set
console.log(`size goes back to 2, value 5 is deleted from set`);
console.log(exampleSet.delete(5));  //also return true on successful deletion and false otherwise
console.log(exampleSet.size);
console.log('================================================');

//check if the value have 5 in it
console.log(`check if the value have 5 in it`);
console.log(exampleSet.has(5));
console.log('================================================');

//check if the value have 2 in it
console.log(`check if the value have 2 in it`);
console.log(exampleSet.has(2));
console.log('================================================');

//clear the set
console.log(`clear the set`);
exampleSet.clear();
console.log(exampleSet.size);
console.log('================================================');