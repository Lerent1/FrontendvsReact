class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp() {
        this.speed += 10;
        return `Tang thanh cong, ${this.speed}`
        
    }
    slowDown() {
        this.speed -= 10;
        return `Giam thanh cong, ${this.speed}`
    }
    showSpeed() {
        return `Toc do hien tai la ${this.speed}`;
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    getGear() {
        return this.gear;
    }
    showInfo() {
        return `Name:${this.name}, Speed:${this.speed}, Id:${this.id}, Gear:${this.getGear()}`
    }
}

const lists = new Vehicle("Oto", 50, 2);
console.log(lists.slowDown());
console.log(lists.speedUp());
console.log(lists.showSpeed());
