class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    showInfo() {
        console.log(`Ten xe: ${this.name}, san xuat nam: ${this.year}, hang: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("panamera", 2022, "porsche");
const vehicle2 = new Vehicle("cybertruck", 2025, "Tesla");
vehicle1.showInfo();
vehicle2.showInfo();
