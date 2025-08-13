function fusion(grp1, grp2) {
    return Object.assign(Object.assign({}, grp1), grp2);
}
const person = { name: "Minh", age: 19 };
const job = { title: "Developer", salary: 1000000 };
const result = fusion(person, job);
console.log(result);
