const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
let a = input[1].split(' ').map(Number);

let visited = new Array(n).fill(false);
let selected = [];
let answer = [];

function dfs(a, depth) {
  if (depth == n) {
    let result = [];
    for (i of selected) {
      result.push(a[i]);
    }
   
    answer.push(calc(result));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    selected.push(i);
    visited[i] = true;
    dfs(a, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

function calc(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

dfs(a, 0);
console.log(Math.max(...answer));

