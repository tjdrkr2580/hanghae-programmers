function solution(price, money, count, sum = 0) {
    for(let i = 1 ; i <= count ; i++) 
        sum += (price * i);
    if(sum - money < 0) return 0
    return sum - money
}