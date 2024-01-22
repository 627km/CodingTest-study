let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let setArr = [...new Set(arr)];
setArr.sort((a, b) => a - b);

let answer = "";

let map = new Map();
for (let i = 0; i < setArr.length; i++) {
    map.set(setArr[i], i);
}

for (x of arr) {
    answer += map.get(x) + " ";
}
console.log(answer);
