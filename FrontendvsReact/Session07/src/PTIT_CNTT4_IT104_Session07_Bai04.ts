abstract class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayInfo(): void {
        console.log(`Ten: ${this.name}`);
    }
}

class Student extends Person {
    public id: string;
    constructor(id: string, name: string) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Id: ${this.id}, ten: ${this.name}`);
    }
}

class Teacher extends Person {
    public subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Name: ${this.name}, mon: ${this.subject}`);
    }
}

const student = new Student("SV001", "Nguyen Tuan Minh");
const teacher = new Teacher("Who", "Nhat");
student.displayInfo();
teacher.displayInfo();