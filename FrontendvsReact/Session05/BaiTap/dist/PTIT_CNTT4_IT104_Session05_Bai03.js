class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Ten: ${this.name}, cong ty: ${this.company}, SDT: ${this.phone}`);
    }
}
const emp = new Employee("Nguyen Tuan Minh", "lol", "012345678");
emp.printInfo();
