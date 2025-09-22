class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getArea(): number {
        return this.width * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    public show(): void {
        console.log(
            `Width: ${this.width}, Height: ${this.height}, ` + `Perimeter: ${this.getPerimeter()}, Area: ${this.getArea()}`
        );
    }
}
const rect = new Rectangle(5, 10);
rect.setWidth(16);
rect.setHeight(7);
rect.show();