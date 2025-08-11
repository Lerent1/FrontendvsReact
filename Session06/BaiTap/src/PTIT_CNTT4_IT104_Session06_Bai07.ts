class Students {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    setName(newName: string): void {
        this.name = newName;
    }
}

let allStudent: Students[] = [];
class Classrooms {
    student: Students[] = [];
    showStudents(): void {
        if (this.student.length === 0) {
            console.log("Lop chua co hoc sinh");
        } else {
            this.student.forEach(s => {
                console.log(`ID: ${s.getId()}, name: ${s.getName()}`);
            });
        }
    }
    addStudent(student: Students): void {
        this.student.push(student);
    }
    filterStudent(id: number): Students[] {
        return this.student.filter(s => s.getId() === id);
    }
    addStudentInClass(id: number): void {
        const index = allStudent.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.student.push(allStudent[index]);
            allStudents.splice(index, 1);
        }
    }
    removeStudent(id: number): void {
        const index = this.student.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudent.push(this.student[index]);
            this.student.splice(index, 1);
        }
    }
    editStudent(id: number, newName: string): void {
        const student = this.student.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}

allStudent.push(
    new Students(1, "Minh"),
    new Students(2, "Thang"),
    new Students(3, "Loc"),
);

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