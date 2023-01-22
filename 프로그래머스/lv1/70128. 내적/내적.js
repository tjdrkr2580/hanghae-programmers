function solution(a, b) {
    let sum = 0;
    a.map((a, index) => sum += (a * b[index]))
    return sum;
}