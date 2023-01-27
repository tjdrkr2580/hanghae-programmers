function solution(num, i = 0) {
    if(num === 1) return 0;
    for(i ; i < 500 ; i++) {
        if(num === 1) break;
        if(num%2 === 0) num = num/2;
        else if(num%2 !== 0) num = (num*3) +1;
    }
    if(i === 500) return -1;
    return i;
}