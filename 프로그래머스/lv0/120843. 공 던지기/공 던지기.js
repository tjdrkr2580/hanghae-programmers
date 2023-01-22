function solution(numbers, k) {
    let count = 0;
    for(let i = 0 ; i < k-1 ; i++){
        count += 2;
        if(count >= (numbers.length)){
            count -= (numbers.length);
        }
    }
    return numbers[count];
}