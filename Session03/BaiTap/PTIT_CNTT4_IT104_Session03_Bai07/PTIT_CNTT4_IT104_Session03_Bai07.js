function removeDuplicates(input) {
    var result = "";
    for (var i = 0; i < input.length; i++) {
        var text = input[i];
        if (result.indexOf(text) === -1) {
            result += text;
        }
    }
    return result;
}
console.log(removeDuplicates("banana"));
console.log(removeDuplicates("hello world"));
