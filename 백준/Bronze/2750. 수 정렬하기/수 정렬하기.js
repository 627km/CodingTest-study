let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);
let answer = "";
answer = arr.join("\n");

console.log(answer);
