// BJ_2438
// 별 찍기

const fs = require("fs");
let input = Number(fs.readFileSync("./input.txt").toString());
let res = "";

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    res += "*";
  }
  res += "\n";
}

console.log(res);
