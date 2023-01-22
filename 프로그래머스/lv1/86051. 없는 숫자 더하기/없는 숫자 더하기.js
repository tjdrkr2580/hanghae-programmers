function solution(numbers, sum = 0) {
     numbers.includes(1) === true ? null : sum += 1
     numbers.includes(2) === true ? null : sum += 2
     numbers.includes(3) === true ? null : sum += 3 
     numbers.includes(4) === true ? null : sum += 4 
     numbers.includes(5) === true ? null : sum += 5 
     numbers.includes(6) === true ? null : sum += 6 
     numbers.includes(7) === true ? null : sum += 7 
     numbers.includes(8) === true ? null : sum += 8 
     numbers.includes(9) === true ? null : sum += 9
    return sum;
}