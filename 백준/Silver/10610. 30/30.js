const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const numArr = input.split("").map(Number);

numArr.sort((a, b) => b - a);

const sum = numArr.reduce((acc, cur) => acc + cur);

console.log(sum % 3 === 0 && numArr.includes(0) ? numArr.join("") : -1);