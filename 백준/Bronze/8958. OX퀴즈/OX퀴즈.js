const filePath = process.platform === "linux" ? "/dev/stdin" : "./dd.txt";

let arr = require("fs").readFileSync(filePath).toString().split("\n");

let count = 1;
let sum = 0;
let answer = [];
for (let i = 1; i <= arr[0]; i++) {
  let array = arr[i].split("");
  sum = 0;
  count = 1;
  for (let j = 0; j < array.length; j++) {
    if (array[j] === "O") {
      sum += count;
      count += 1;
    } else {
      count = 1;
    }
  }
  console.log(sum);
}