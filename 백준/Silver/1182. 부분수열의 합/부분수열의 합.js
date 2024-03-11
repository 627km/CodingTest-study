const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, s] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let visited = new Array(n).fill(false);
let selected = [];

let answer = 0;

function dfs(arr, depth, start, length) {
  if (depth == length) {
    let result = [];
    let total = 0;
    for (i of selected) {
      result.push(arr[i]);
    }
    for (i of result) {
      total += i;
    }
    if (total == s) {
      answer++;
    }
    return;
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1, length);
    selected.pop();
    visited[i] = false;
  }
}

for (let i = 0; i < n; i++) {
  dfs(arr, 0, 0, i + 1);
}
console.log(answer);
