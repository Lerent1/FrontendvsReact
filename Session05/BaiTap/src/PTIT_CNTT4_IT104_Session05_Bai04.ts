class Vehicles {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    public printInfo(): void {
        console.log(`ID: ${this.id}, ten: ${this.name}, san xuat: ${this.year}, hang: ${this.company}`);
    }
}
const vehicle = new Vehicles(1, "may", 2022, "xe");

vehicle.printInfo();