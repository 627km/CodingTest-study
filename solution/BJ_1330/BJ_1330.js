// BJ_1330
// 두 수 비교하기

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}
