function introduceStudent(student) {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}.`);
}
const student = {
    name: "Tuan Minh",
    age: 19,
    email: "TuanMinh@gmail.com"
};
introduceStudent(student);
