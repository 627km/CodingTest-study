const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let visited;
let selected;
let answer;
function dfs(arr, depth, start, k) {
  if (depth == 6) {
    let result = [];
    for (i of selected) {
      result.push(arr[i]);
    }
    answer += result.join(' ');
    answer += '\n';
    return;
  }

  for (let i = start; i < k; i++) {
    if (visited[i]) {
      continue;
    }

    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1, k);
    selected.pop();
    visited[i] = false;
  }
}
let flag = false;
while (!flag) {
  let arr = input.shift().split(' ').map(Number);
  let k = arr.shift();

  if (k == 0) {
    flag = true;
    return;
  }
  visited = new Array(k).fill(false);
  selected = [];
  answer = '';
  dfs(arr, 0, 0, k);
  console.log(answer);
}
