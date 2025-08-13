const flatten = (arr) => {
    return arr.reduce((me, you) => me.concat(you), []);
};
const listNum = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(listNum));
const fruits = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
console.log(flatten(fruits));
