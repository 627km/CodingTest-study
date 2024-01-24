let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let answer = 0;
let temp = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        temp += arr[j];
    }
    answer += temp;
    temp = 0;
}

console.log(answer);
