const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  temp = input[i].split(' ').map(Number);
  arr.push(temp);
}

let visited = new Array(n).fill(false);
let selected = [];

let answer = [];
function dfs(arr, depth, length, start) {
  if (depth == length) {
    let s = 1;
    let b = 0;
    let result = [];
    let flavor = 0;

    for (i of selected) {
      result.push(arr[i]);
    }
    for (let i = 0; i < result.length; i++) {
      s *= result[i][0];
      b += result[i][1];
    }
    answer.push(Math.abs(s - b));
    return;
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, length, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

for (let i = 1; i <= n; i++) {
  dfs(arr, 0, i, 0);
}
console.log(Math.min(...answer));
