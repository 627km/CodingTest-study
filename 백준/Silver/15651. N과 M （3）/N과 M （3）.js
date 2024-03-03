const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let output = [];

let answer = '';

function dfs(output, depth) {
  if (depth == m) {
    answer += output.join(' ');
    answer += '\n';
    return;
  }

  for (let i = 0; i < n; i++) {
    output.push(i + 1);
    dfs(output, depth + 1);
    output.pop();
  }
}

dfs(output, 0);
console.log(answer);
