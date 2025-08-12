abstract class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}

const cat = new Cat("Doraemon");
const dog = new Dog("Doggy");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();