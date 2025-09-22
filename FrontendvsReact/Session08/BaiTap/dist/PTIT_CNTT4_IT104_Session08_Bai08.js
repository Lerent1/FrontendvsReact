const partialUpdate = (obj, updates) => {
    return Object.assign(Object.assign({}, obj), updates);
};
const person1 = { name: 'Minh', age: 30, job: 'Developer' };
console.log(partialUpdate(person1, { age: 19 }));
const person2 = { name: 'Thang', age: 19, job: 'Developer' };
console.log(partialUpdate(person2, { name: 'Bob', job: 'Designer' }));
