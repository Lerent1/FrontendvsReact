class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
const cat = new Cat("Doraemon");
const dog = new Dog("Doggy");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
