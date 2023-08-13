// BJ_10952
// 두 수를 입력받아 합을 출력
// 0 두개는 입력의 마지막을 의미 -> 프로그램 종료

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\r\n");

// 백준에 정답 제출 업로드 시
//let input = fs.readFileSync("./dev/stdin").toString().split('\n')

for (let i = 0; i < input.length; i++) {
    let A = parseInt(input[i].toString().split(" ")[0]);
    let B = parseInt(input[i].toString().split(" ")[1]);
    let sum = A + B;
    if (sum !== 0) {
        console.log(sum);
    } else {
        break;
    }
}
