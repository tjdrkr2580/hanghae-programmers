function solution(n, count = 0) {
    let arr = []
    for(let i = 2 ; i <= n ; i++){
        if(i%2 === 0 && i > 3) continue;
        if(findPrime(i) === true) {
            arr.push(i)
        }
    }
    return arr.length;
}

function findPrime(x) {
    for(let i = 2 ; i <= Math.sqrt(x) ; i++){
        if(x%i === 0) return false;
    }
    return true;
}