const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const command = Number(input.shift());

const commands = input.map((it) => it.split(" "));

let stack = [];
let ans = [];

for (let i = 0; i < command; i++) {
    switch (commands[i][0]) {
        case "push":
            stack.push(commands[i][1]);
            break;
        case "pop":
            if (stack.length !== 0) {
                ans.push(stack.pop());
            } else {
                ans.push(-1);
            }
            break;
        case "size":
            ans.push(stack.length);

            break;
        case "empty":
            if (stack.length == 0) {
                ans.push(1);
            } else {
                ans.push(0);
            }
            break;
        case "top":
            if (stack.length !== 0) {
                ans.push(stack[stack.length - 1]);
            } else {
                ans.push(-1);
            }

            break;
    }
}

console.log(ans.join("\n"));
