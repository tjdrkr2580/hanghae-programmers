function solution(d, budget, count = 0) {
    d.sort((a,b) => a - b);
    let sum = 0;
    for(let i = 0 ; i < d.length ; i++) {
        sum += d[i];
        if(budget >= sum) {
            count ++;
        }
        else {
            break;
        }
    }
    return count
}