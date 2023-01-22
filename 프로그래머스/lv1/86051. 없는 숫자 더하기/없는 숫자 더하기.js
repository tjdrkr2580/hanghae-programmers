function solution(numbers, sum = 0) {
    for(let i = 1; i <= 9 ; i++) {
        if(!numbers.includes(i) === true) sum += i;
    }
    return sum;
}