const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let n = parseInt(input.shift(), 10);
let numbers = input.toString().split(" ").map(Number);
numbers.sort((a,b) => a-b);

let result = [];

function solution(n, numbers) {
    let arrays = [];
    for (let i = 0; i < n; i++) {
        let array = new Array();
        for (let j = 1; j <= numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                array.push(j);
            }
        }
        arrays.push(array);
    }

    result = arrays[0];

    for (let i = 0; i < arrays.length - 1; i++) {
        let temp = arrays[i].filter((item) => arrays[i + 1].includes(item));
        result = result.filter((el) => temp.includes(el));
    }
}

solution(n, numbers);

result.forEach((num) => console.log(num));
