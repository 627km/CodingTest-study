let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]); // 지방 수
let money = Number(input[2]); // 총 예산
let arr = [];
arr = input[1].split(' ').map(Number); // 지방의 요청 예산금액

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b)); // 지방 요청 예상금액 중 제일 큰 금액

let result = 0; // 상한금액
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += Math.min(mid, x); // 상한액보다 요청이 작으면 요청금액으로 배정, 상한액이 작으면 상한액으로 배정
  }
  if (total <= money) {
    // 총 합이 총예산금액보다 작거나 같으면 조건만족
    result = mid;
    start = mid + 1;
  } else {
    // 조건 만족 X -> 상한액 감소시키기
    end = mid - 1;
  }
}

console.log(result);
