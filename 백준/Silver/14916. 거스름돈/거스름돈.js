const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]); // 거슬러 줘야할 돈
let answer = 0;

while (n >= 2) {
    if (n % 5 == 0) {
        answer += parseInt(n / 5);
        n = 0; // 5로 나누어 떨어지면 남은 거스름돈은 없으므로 0을 넣어준다.
    } else {
        n -= 2;
        answer++;
    }
}

console.log(n == 0 ? answer : -1);