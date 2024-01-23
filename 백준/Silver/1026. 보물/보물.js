let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let n = Number(input[0]);
let a = [];
let b = [];
a = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
b = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < n; i++) {
    answer += a[i] * b[i];
}

console.log(answer);
