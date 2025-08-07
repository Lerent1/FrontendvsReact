interface Student {
    name: string;
    age: number;
    email: string;
}

function introduceStudent(student: Student): void {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}.`);
}

const student: Student = {
    name: "Tuan Minh",
    age: 19,
    email: "TuanMinh@gmail.com"
};

introduceStudent(student);