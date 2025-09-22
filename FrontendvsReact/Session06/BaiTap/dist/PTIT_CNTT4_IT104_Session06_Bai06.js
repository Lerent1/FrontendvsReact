class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("Lop chua co hoc sinh");
        }
        else {
            this.students.forEach(s => {
                console.log(`ID: ${s.getId()}, name: ${s.getName()}`);
            });
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(s => s.getId() === id);
    }
    addStudentInClass(id) {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}
allStudents.push(new Student(1, "Minh"), new Student(2, "Thang"), new Student(3, "Loc"), new Student(4, "Minh"), new Student(5, "Thang"), new Student(6, "Loc"), new Student(7, "Noname"));
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("Lop A: ");
classA.showStudents();
console.log("Lop B: ");
classB.showStudents();
console.log("Hoc sinh con lai: ", allStudents);
