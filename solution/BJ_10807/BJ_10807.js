// BJ_10807
// 개수 세기

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");

// let total = Number(input[0]); // 첫째줄 : 배열의 요소갯수
// let array = input[1].split(" "); // 배열
// let find = Number(input[2]); // 찾는 수
// let count = 0;
// for (let i = 0; i < total; i++) {
//     if (find == array[i]) {
//         count++;
//     }
// }

// console.log(count);

let array = input[1].toString().split(" ");
let result = array.filter((value) => value == input[2]);

console.log(result.length);
