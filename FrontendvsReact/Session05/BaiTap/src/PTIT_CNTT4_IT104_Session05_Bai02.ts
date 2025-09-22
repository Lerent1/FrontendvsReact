class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }

    showInfo(): void {
        console.log(`ID: ${this.id}, tuoi: ${this.age}, email: ${this.email}`);
    }
}

let students: Student[] = [];
students.push(new Student(1, 18, "sv1@gmail.com"));
students.push(new Student(2, 21, "sv2@gmail.com"));

for (let i = 0; i < students.length; i++) {
    students[i].showInfo();
}