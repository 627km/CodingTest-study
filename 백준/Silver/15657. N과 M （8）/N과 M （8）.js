const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let selected = [];
let answer = '';

function dfs(arr, depth, start) {
  if (depth == m) {
    let result = [];
    for (i of selected) {
      result.push(arr[i]);
    }
    answer += result.join(' ');
    answer += '\n';
    return;
  }

  for (let i = start; i < n; i++) {
    selected.push(i);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer);
