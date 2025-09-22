class _Animal{
    protected name: string;
    protected age: number;
    public species: string;
    constructor(name: string, age: number, species: string){
        this.name = name;
        this.age = age;
        this.species = species;
    }

    sound(): void {
        console.log(`am thanh cua ${this.name}`);
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

class _Dog extends _Animal {
    public bread: string;
    speak(): void {
        console.log(`gau gau gau`);
        
    }
}

class _Cat extends _Animal {
    public bread: string;
    constructor(name: string, age: number, species: string, bread: string){
        super(name, age, species);
        this.age = age;
        this,species = species;
        this.bread = this.bread;
    }
    speak(): void {
        console.log(`meo meo meo meo meo`);
        
    }
    getInfo(): string {
        return `ten ${this.name}, ${this.age} tuoi, ....`
    }
}

class _Rabbit extends _Animal {
    bread: string;
    speak(): void {
        console.log(`ehheheheehh`);
        
    }
}

let meo = new _Cat("meo", 2, "meo", "meo");