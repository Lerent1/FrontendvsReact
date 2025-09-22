function getNumber(...args) {
  const result = [];
  for (let i = 0; i < args.length; i++) {
    const sum = args[i].reduce((num, val) => num + val, 0);
    result.push(sum);
  }

  return result;
}
console.log(getNumber([1,2], [6,7,8], [12,8])); 
