const math = (val: number | string): number | null => {
    const num = Number(val);
    return isNaN(num) ? null : num;
};

const sum = (a: number | string, b: number | string) => {
    const num1 = math(a), num2 = math(b);
    return num1 === null || num2 === null ? "Khong hop le" : num1 + num2;
};

const subtract = (a: number | string, b: number | string) => {
    const num1 = math(a), num2 = math(b);
    return num1 === null || num2 === null ? "Khong hop le" : num1 - num2;
};

const multi = (a: number | string, b: number | string) => {
    const num1 = math(a), num2 = math(b);
    return num1 === null || num2 === null ? "Khong hop le" : num1 * num2;
};

const divide = (a: number | string, b: number | string) => {
    const num1 = math(a), num2 = math(b);
    if (num1 === null || num2 === null) return "Khong hop le";
    if (num2 === 0) return "ko chia duoc cho 0";
    return num1 / num2;
};
console.log("Sum:", sum(12, "ab"));
console.log("Sum:", sum(8, "10"));