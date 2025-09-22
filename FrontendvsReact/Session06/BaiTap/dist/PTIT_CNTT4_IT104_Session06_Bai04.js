class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectanglee {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectanglee(16, 7);
console.log("Circle: ");
console.log("Area: ", circle.calculateArea());
console.log("Perimeter: ", circle.calculatePerimeter());
console.log("\nRectangle: ");
console.log("Area:", rectangle.calculateArea());
console.log("Perimeter: ", rectangle.calculatePerimeter());
