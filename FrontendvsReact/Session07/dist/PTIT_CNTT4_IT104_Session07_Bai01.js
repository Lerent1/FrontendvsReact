class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getphone() {
        return this.phone;
    }
    printfInfo() {
        return `Name: ${this.name}, company: ${this.company}, phone: ${this.phone}`;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    showInfo() {
        return `Name: ${this.name}, company: ${this.company}, phone: ${this.getphone()}, teamSize: ${this.teamSize}`;
    }
}
const list = new Employee("Minh", "Chu tich", 12345);
console.log(list.printfInfo());
