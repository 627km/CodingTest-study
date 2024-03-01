const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
let visited = new Array(n).fill(false);

let selected = [];
let answer = '';

function dfs(arr, depth) {
  let result = [];

  if (depth == n) {
    for (x of selected) {
      result.push(arr[x]);
    }
    for (i of result) {
      answer += i + ' ';
    }
    answer += '\n';
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
