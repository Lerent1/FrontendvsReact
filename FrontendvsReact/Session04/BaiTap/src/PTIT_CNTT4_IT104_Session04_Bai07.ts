function processInput(input: string | number | boolean): void {
    if (typeof input === "string") {
        if (!isNaN(Number(input))) {
            const num = Number(input);
            console.log(num * num);
        } else {
            let count = 0;
            for (const char of input.toLowerCase()) {
                if (char >= 'a' && char <= 'z') {
                    count++;
                }
            }
            console.log(`${count} ky tu chu cai`);
        }
    } else if (typeof input === "number") {
        console.log(element(input) ? "la so nguyen to" : "ko phai so nguyen to");
    } else if (typeof input === "boolean") {
        console.log(input ? "Gia tri true - tien hanh xu ly" : "Gia tri false - dung xu ly");
    }
}

function element(n: number): boolean {
    if (n < 2 || !Number.isInteger(n)){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0){
            return false;
        }
    }
    return true;
}

processInput("123");
processInput("abc123!");
processInput(11);
processInput(true);