function removeDuplicates(input: string): string {
    let result: string = "";

    for (let i = 0; i < input.length; i++) {
        let text = input[i];
        if (result.indexOf(text) === -1) {
            result += text;
        }
    }
    
    return result;
}
console.log(removeDuplicates("banana"));
console.log(removeDuplicates("hello world"));
