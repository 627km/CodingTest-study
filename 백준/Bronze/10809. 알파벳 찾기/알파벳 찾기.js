const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("");

let a = Number("a".charCodeAt());
let z = Number("z".charCodeAt());
let result = "";

for (let i = a; i <= z; i++) {
    let str = String.fromCodePoint(i);
    if (input.includes(str)) {
        result += String(input.indexOf(str)) + " ";
    } else {
        result += "-1 ";
    }

}
console.log(result);