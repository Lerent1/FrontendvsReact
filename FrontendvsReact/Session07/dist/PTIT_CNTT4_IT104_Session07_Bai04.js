class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Ten: ${this.name}`);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Id: ${this.id}, ten: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, mon: ${this.subject}`);
    }
}
const student = new Student("SV001", "Nguyen Tuan Minh");
const teacher = new Teacher("Who", "Nhat");
student.displayInfo();
teacher.displayInfo();
