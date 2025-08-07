type Subject = {
    subjectName: string,
    score: string | number
}

type Student = {
    id: number,
    name: string,
    age: number,
    subject: Subject[]
}

let student: Student[] = [];

function addStudent(id: number, name: string, age: number, subject: Subject[]){
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    }
    student.push(newStudent);
}

function showStudent(): void{
    for (let i = 0; i < student.length; i++){
        console.log(`Thong tin sinh vien thu ${i + 1}: Name_${student[i].name}, id_${student[i].id}, age_${student[i].age}`);
    }
}

function updateStudent(id: number): void {
    const students = student.findIndex(student => student.id === id);
    // if(students === )
}