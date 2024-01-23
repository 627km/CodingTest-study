let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
let n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
    let [age, name] = input[i].split(" ");
    arr.push([age, name]);
}

arr.sort((a, b) => {
    return a[0] - b[0];
});

let answer = "";

for (let i = 0; i < arr.length; i++) {
    answer += arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(answer);
