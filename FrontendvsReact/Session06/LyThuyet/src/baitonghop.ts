interface Animals{
    name: string;
    age: number;
    category: number | string | boolean;

    sound(): string;
    getDetail(): string;
    move(): string;
    feed(): string;
}

abstract class Animal implements Animals{
    name: string;
    age: number;
    category: number | string | boolean;
    constructor(name: string, age: number, category: number | string | boolean){
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound(): string {
        return `Name: ${this.name}, age: ${this.age}, category: ${this.category}`
    }
    getDetail(): string {
        return `Name: ${this.name}, age: ${this.age}, category: ${this.category}`
    }
    move(): string {
        return`Name: ${this.name}, age: ${this.age}, category: ${this.category}`
    }
    feed(): string {
        return`Name: ${this.name}, age: ${this.age}, category: ${this.category}`
    }
}

class Mammal extends Animal{
    furColor: string;
    constructor(name: string, age: number, furColor: string){
        super(name, age, furColor);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
    }
    move(): string {
        return`Phuong thuc di chuyen cua `
    }
    getFullColor(): string {
        return `mau cua loai ${this.name} la: ${this.furColor}`
    }
}

class Brid extends Animal{
    wingSpan: number;
    constructor(name: string, age: number, wingSpan: number){
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move(): string {
        return`phuong thuc di chuyen cua chim`
    }
    getWingSpan(): string {
        return `Sai canh cua loai ${this.name} la: ${this.wingSpan}`
    }
}

class RepTitle extends Animal{
    venomous: boolean;
    constructor(name: string, age: number, venomous: boolean){
        super(name, age, venomous);
        this.name = name;
        this.age = age;
        this.venomous = venomous;
    }
    move(): string {
        return`Phuong thuc di chuyen cua bo sat`
    }
    
}

const animal: Animal[] = [
    new Brid("Bird", 2, 5),
    new RepTitle("snake", 3, true),
    new Mammal("Comodo", 5, "Gray"),
];

animal.forEach(item => {
    console.log(item.move());
});

const chill = new Mammal("Nig...", 2, "Black")
console.log(chill.getFullColor());
