function reverseArray(arr) {
    return arr.slice().reverse();
}
let numbers = [1, 2, 3, 4, 5];
let revNumber = reverseArray(numbers);
console.log(revNumber);
let strings = ["a", "b", "c"];
let revString = reverseArray(strings);
console.log(revString);
