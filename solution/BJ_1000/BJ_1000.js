// BJ_1000
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성

const fs = require("fs");
input = fs.readFileSync("./input.txt").toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

console.log(a + b);
