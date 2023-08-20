const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\r\n");
console.log(input);

for (let i = 0; i < input.length; i++) {
    let A = parseInt(input[i].toString().split(" ")[0]);
    let B = parseInt(input[i].toString().split(" ")[1]);
    console.log(A + B);
}
