class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chieu rong: ${this.width}, Chieu cao: ${this.height}`);
    }
}
const rect = new Rectangle("Hinh chu nhat", 5, 3);
console.log("Name:", rect.getName());
rect.getSize();
