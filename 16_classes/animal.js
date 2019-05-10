export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static crap() {
        return 'Poop!';
    }
}

//how to extend class
//to access the parent variable in the extended class, we have to make use of the Super keyword
export class Lion extends Animal {
    constructor(type, legs, tail){
        super(type, legs);
        this.tail = tail;
    }

    makeNoise(sound = "Roar"){
        console.log(sound);
    }
}