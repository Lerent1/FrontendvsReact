class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    show() {
        console.log(`Width: ${this.width}, Height: ${this.height}, ` + `Perimeter: ${this.getPerimeter()}, Area: ${this.getArea()}`);
    }
}
const rect = new Rectangle(5, 10);
rect.setWidth(16);
rect.setHeight(7);
rect.show();
