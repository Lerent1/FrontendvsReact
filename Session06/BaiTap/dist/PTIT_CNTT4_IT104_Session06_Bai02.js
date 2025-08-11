class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loai cong viec: ${this.type}`);
    }
}
class PartTime extends Job {
    constructor(workingHour) {
        super("PartTime");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class Fulltime extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttime = new PartTime(80);
const fulltime = new Fulltime();
parttime.printType();
console.log("Luong:", parttime.calculateSalary(), "VND");
fulltime.printType();
console.log("Luong:", fulltime.calculateSalary(), "VND");
