function solution(s) {
   let answer = "*".repeat(s.length-4)+s.slice(-4);
   return answer;
}