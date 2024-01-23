let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
let arr = [];
arr = input[0].split("").map(Number);

arr.sort((a, b) => b - a);

let answer = "";

answer = arr.join("");
console.log(answer);
