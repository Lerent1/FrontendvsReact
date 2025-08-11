abstract class Job {
    protected type: string;
    constructor(type: string) {
        this.type = type;
    }
    printType(): void {
        console.log(`Loai cong viec: ${this.type}`);
    }
    abstract calculateSalary(): number;
}

class PartTime extends Job {
    private workingHour: number;
    constructor(workingHour: number) {
        super("PartTime");
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class Fulltime extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary(): number {
        return 10000000;
    }
}

const parttime = new PartTime(80);
const fulltime = new Fulltime();

parttime.printType();
console.log("Luong:", parttime.calculateSalary(), "VND");
fulltime.printType();
console.log("Luong:", fulltime.calculateSalary(), "VND");