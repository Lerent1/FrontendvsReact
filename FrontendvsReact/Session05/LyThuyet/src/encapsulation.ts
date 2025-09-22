class Student {
    fullName: string;
    age: number;

    constructor(fullName: string, age: number){
        this.fullName = fullName;
        this.age = age;
    }
    getInfo(): string {
        return `Xin chao ${this.fullName}, ${this.age} tuoi`
    }
    setAge(new_age: number) {
        this.age = new_age;
    }
}

let student = new Student("Nguyen Tuan Minh", 19);
student.setAge(19);
console.log(student.getInfo());