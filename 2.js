const fs = require("fs");
// node 2.js 1 2
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
// console.log(input);

const input = fs.readFileSync("input.txt").toString().split(" ");
// console.log(input[0], input[1]);
console.log(parseInt(input[0]) + parseInt(input[1]));

/*
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(parseInt(input[0]) + parseInt(input[1]));
*/