// BJ_10871
// X보다 작은 수 출력

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\r\n");

let num = Number(input[0].toString().split(" ")[1]);
let array = input[1].toString().split(" ");
let resultArr = array.filter((value) => value < num);

let result = "";

for (let i = 0; i < resultArr.length; i++) {
    result += resultArr[i] + " ";
}
console.log(result);
