const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

// 회문(펠린드롬)인지 확인하는 함수
function palindrome(string) {
  return string == string.split('').reverse().join('');
}

let n = Number(input.shift());

for (let tc = 0; tc < n; tc++) {
  let string = input[tc];
  if (palindrome(string)) {
    console.log(0);
  } else {
    let found = false;
    let length = string.length;
    for (let i = 0; i < parseInt(length / 2); i++) {
      if (string[i] != string[length - 1 - i]) {
        // 다른 문자 중 앞의 문자를 제거해보고 회문 확인
        if (palindrome(string.slice(0, i) + string.slice(i + 1, length))) {
          found = true;
        }
        // 다른 문자 중 뒤의 문자를 제거해보고 회문 확인
        if (palindrome(string.slice(0, length - 1 - i) + string.slice(length - i, length))) {
          found = true;
        }
        break;
      }
    }
    if (!found) {
      console.log(2);
    } else {
      console.log(1);
    }
  }
}
