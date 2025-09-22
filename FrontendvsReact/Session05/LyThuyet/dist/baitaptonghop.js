class _Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    sound() {
        console.log(`am thanh cua ${this.name}`);
    }
    setName(newName) {
        this.name = newName;
    }
}
class _Dog extends _Animal {
    speak() {
        console.log(`gau gau gau`);
    }
}
class _Cat extends _Animal {
    constructor(name, age, species, bread) {
        super(name, age, species);
        this.age = age;
        this, species = species;
        this.bread = this.bread;
    }
    speak() {
        console.log(`meo meo meo meo meo`);
    }
    getInfo() {
        return `ten ${this.name}, ${this.age} tuoi, ....`;
    }
}
class _Rabbit extends _Animal {
    speak() {
        console.log(`ehheheheehh`);
    }
}
let meo = new _Cat("meo", 2, "meo", "meo");
