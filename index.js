const solution = require("./solution/solution1");

function main() {
  let param = solution.getParameter();

  let answer = solution.solution1(param);
  console.log(answer);
}

main();
