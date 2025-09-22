class Student {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    getInfo() {
        return `Xin chao ${this.fullName}, ${this.age} tuoi`;
    }
    setAge(new_age) {
        this.age = new_age;
    }
}
let student = new Student("Nguyen Tuan Minh", 19);
student.setAge(19);
console.log(student.getInfo());
