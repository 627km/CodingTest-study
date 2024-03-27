const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let tc = Number(input[0]);
let line = 1;

while (tc--) {
  // 가로길이(n) 세로길이(m) 배추가 심어져 있는 위치의 개수(k)
  let [n, m, k] = input[line].split(' ').map(Number);
  let graph = []; // 그래프의 정보
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[x][y] = 1;
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) {
        answer++;
      }
    }
  }
  line += k + 1;
  console.log(answer);
}

function dfs(graph, n, m, x, y) {
  // 주어진 범위를 벗어나는 경우
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }
  if (graph[x][y] == 1) {
    graph[x][y] = -1; // 방문처리
    dfs(graph, n, m, x - 1, y); // 상
    dfs(graph, n, m, x + 1, y); // 하
    dfs(graph, n, m, x, y - 1); // 좌
    dfs(graph, n, m, x, y + 1); // 우
    return true;
  }
  return false;
}
