function solution(n) {
    let num = 0;
    for(let i = 1 ; i <= n ; i++){
        if(n%i==0) num += i;
    }
    return num;
}