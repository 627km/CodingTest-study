let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
let arr1 = input[0].split(" ").map(Number);
let n = arr1[0];
let k = arr1[1];

let arr2 = input[1].split(" ").map(Number);

arr2.sort((a, b) => a - b);
console.log(arr2[k - 1]);
