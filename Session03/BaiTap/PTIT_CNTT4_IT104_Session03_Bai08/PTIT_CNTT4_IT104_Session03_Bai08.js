var math = function (val) {
    var num = Number(val);
    return isNaN(num) ? null : num;
};
var sum = function (a, b) {
    var num1 = math(a), num2 = math(b);
    return num1 === null || num2 === null ? "Khong hop le" : num1 + num2;
};
var subtract = function (a, b) {
    var num1 = math(a), num2 = math(b);
    return num1 === null || num2 === null ? "Khong hop le" : num1 - num2;
};
var multi = function (a, b) {
    var num1 = math(a), num2 = math(b);
    return num1 === null || num2 === null ? "Khong hop le" : num1 * num2;
};
var divide = function (a, b) {
    var num1 = math(a), num2 = math(b);
    if (num1 === null || num2 === null)
        return "Khong hop le";
    if (num2 === 0)
        return "ko chia duoc cho 0";
    return num1 / num2;
};
console.log("Sum:", sum(12, "ab"));
console.log("Sum:", sum(8, "10"));
console.log("Multi:", multi(2, 12));
