const findElement = (arr, value) => {
    return arr.find(item => item === value);
};
const listNumber = [1, 2, 3, 4, 5];
console.log(findElement(listNumber, 3));
console.log(findElement(listNumber, 10));
const listString = ["apple", "banana", "orange"];
console.log(findElement(listString, "banana"));
console.log(findElement(listString, "fruit"));
