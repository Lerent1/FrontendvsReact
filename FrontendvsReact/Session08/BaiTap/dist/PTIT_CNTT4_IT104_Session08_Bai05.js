const firstNumber = (arr) => {
    return arr.find(item => Number(item) % 2 === 0);
};
const number = [1, 3, 5, 6, 7];
const results = firstNumber(number);
const mix = ["1", "3", "4", "5"];
const result2 = firstNumber(mix);
console.log(results, result2);
