const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(''));
}
let visited = Array.from({ length: n }, () => new Array(m).fill(false));

let d = [-1, 1];

function dfs(y, x, item) {
  visited[y][x] = true;

  if (item === '|') {
    for (let i = 0; i < 2; i++) {
      const ny = y + d[i];
      if (ny < 0 || ny >= n) {
        continue;
      }
      if (!visited[ny][x] && graph[ny][x] === '|') {
        dfs(ny, x, item);
      }
    }
  } else {
    for (let i = 0; i < 2; i++) {
      const nx = x + d[i];
      if (nx < 0 || nx >= m) {
        continue;
      }
      if (!visited[y][nx] && graph[y][nx] === '-') {
        dfs(y, nx, item);
      }
    }
  }
}

let cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j]) {
      cnt++;
      graph[i][j] === '-' ? dfs(i, j, '-') : dfs(i, j, '|');
    }
  }
}

console.log(cnt);
