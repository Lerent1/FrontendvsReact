class Employee {
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    getphone(){
        return this.phone;
    }

    printfInfo(){
        return `Name: ${this.name}, company: ${this.company}, phone: ${this.phone}`
    }
}

class Manager extends Employee {
    teamSize: number;
    constructor(name: string, company: string, phone: number, teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    showInfo() {
        return `Name: ${this.name}, company: ${this.company}, phone: ${this.getphone()}, teamSize: ${this.teamSize}`
    }
}

const list = new Employee("Minh", "Chu tich", 12345);
console.log(list.printfInfo());