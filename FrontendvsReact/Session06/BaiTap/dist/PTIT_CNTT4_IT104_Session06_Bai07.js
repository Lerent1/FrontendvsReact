class Students {
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
    setName(newName) {
        this.name = newName;
    }
}
let allStudent = [];
class Classrooms {
    constructor() {
        this.student = [];
    }
    showStudents() {
        if (this.student.length === 0) {
            console.log("Lop chua co hoc sinh");
        }
        else {
            this.student.forEach(s => {
                console.log(`ID: ${s.getId()}, name: ${s.getName()}`);
            });
        }
    }
    addStudent(student) {
        this.student.push(student);
    }
    filterStudent(id) {
        return this.student.filter(s => s.getId() === id);
    }
    addStudentInClass(id) {
        const index = allStudent.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.student.push(allStudent[index]);
            allStudents.splice(index, 1);
        }
    }
    removeStudent(id) {
        const index = this.student.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudent.push(this.student[index]);
            this.student.splice(index, 1);
        }
    }
    editStudent(id, newName) {
        const student = this.student.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}
allStudent.push(new Students(1, "Minh"), new Students(2, "Thang"), new Students(3, "Loc"));
const classC = new Classrooms();
classC.addStudentInClass(1);
classC.addStudentInClass(2);
classC.addStudentInClass(3);
classC.showStudents();
console.log("Hoc sinh con lai");
console.log(allStudent.map(s => `${s.getId()} - ${s.getName()}`));
classC.removeStudent(2);
classC.showStudents();
console.log("Hoc sinh con lai la: ", allStudent.map(s => `${s.getId()} - ${s.getName()}`));
classC.editStudent(1, "Minh Updated");
classC.showStudents();
