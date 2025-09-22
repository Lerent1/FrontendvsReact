class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Ten: ${this.name}, cong ty: ${this.company}, SDT: ${this.phone}`);
    }
}
const emp = new Employee("Nguyen Tuan Minh", "lol", "012345678");

emp.printInfo();