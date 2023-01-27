function solution(arr) {
    let answer = 0;
    arr.map((a) => answer +=a );
    return answer/arr.length;
}