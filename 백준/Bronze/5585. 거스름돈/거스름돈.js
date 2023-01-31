const filePath = process.platform === "linux" ? "/dev/stdin" : "./dd.txt";
let num = parseInt(require("fs").readFileSync(filePath).toString());

let price = 1000 - num;
let arr = [500, 100, 50, 10, 5, 1];
let result = 0;

for (let i = 0; i < arr.length; i++) {
  let slash = Math.floor(price / arr[i]);
  price -= slash * arr[i];
  result += slash;
}
console.log(result);
