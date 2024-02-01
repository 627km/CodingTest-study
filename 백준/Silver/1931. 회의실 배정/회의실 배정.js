let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    arr.push([x, y]);
}

arr.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
});

let cnt = 1;
let current = arr[0];

for (let i = 1; i < N; i++) {
    if (current[1] <= arr[i][0]) {
        current = arr[i];
        cnt++;
    }
}

console.log(cnt);
