let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
let time = input[0].split(" ");
let hour = Number(time[0]);
let min = Number(time[1]);

if (min < 45) {
    if (hour > 0) {
        hour -= 1;
        min += 15;
    } else {
        hour = 23;
        min += 15;
    }
} else {
    min -= 45;
}

console.log(`${hour} ${min}`);