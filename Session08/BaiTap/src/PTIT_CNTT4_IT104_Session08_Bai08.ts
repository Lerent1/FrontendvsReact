const partialUpdate = <T extends object>(obj: T, updates: Partial<T>): T => {
    return { ...obj, ...updates };
};

const person1 = { name: 'Minh', age: 30, job: 'Developer' };
console.log(partialUpdate(person1, { age: 19 }));
const person2 = { name: 'Thang', age: 19, job: 'Developer' };
console.log(partialUpdate(person2, { name: 'Bob', job: 'Designer' }));