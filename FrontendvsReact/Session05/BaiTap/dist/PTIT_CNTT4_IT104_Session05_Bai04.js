class Vehicles {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`ID: ${this.id}, ten: ${this.name}, san xuat: ${this.year}, hang: ${this.company}`);
    }
}
const vehicle = new Vehicles(1, "may", 2022, "xe");
vehicle.printInfo();
