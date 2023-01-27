function solution(s, answer = '') {
    let array = s.split("");
    let num = Math.floor(array.length/2);
    return array.length % 2 !==0 ? ""+array[num] : ""+array[num-1]+array[num];     
}