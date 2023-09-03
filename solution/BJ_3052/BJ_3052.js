// BJ_3052
// 나머지

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");
let rest = [];

input.forEach((value) => {
    const num = value % 42;

    if (rest.indexOf(num) === -1) {
        rest.push(num);
    }
});

console.log(rest.length);
