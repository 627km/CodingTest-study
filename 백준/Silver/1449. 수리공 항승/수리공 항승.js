let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let l = Number(input[0].split(' ')[1]);

let arr = [];
arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

function solution(n, l, arr) {
    let result = 1; // 무조건 하나는 사용

    let start = arr.shift(); // 제일 앞 시작점

    for (let num of arr) {
        if (num - start > l - 1) {
            result++;
            start = num;
        }
    }

    console.log(result);
}

solution(n, l, arr);
