let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
}

function compare(a, b) {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
}

arr.sort(compare);

let answer = "";
for (let i = 0; i < arr.length; i++) {
    answer += `${arr[i][0]} ${arr[i][1]}\n`;
}
console.log(answer);
