const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [N, brand] = input[0].split(' ').map(Number);

let arr = [];

let set = [];
let piece = [];

for (let i = 1; i <= brand; i++) {
    set.push(input[i].split(' ').map(Number)[0]);
    piece.push(input[i].split(' ').map(Number)[1]);
}

let minSet = Math.min(...set);
let minPiece = Math.min(...piece);

let flag = false;

let answer = 0;
while (!flag) {
    let setNum = parseInt(N / 6);
    if (N < 6) {
        answer += Math.min(minSet, minPiece * N);
        flag = true;
    } else {
        answer += Math.min(minSet * setNum, minPiece * setNum * 6);
        N = N - setNum * 6;
    }
}
console.log(answer);
