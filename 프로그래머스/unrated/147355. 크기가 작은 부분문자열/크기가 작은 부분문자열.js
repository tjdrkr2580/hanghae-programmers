function solution(t, p) {
    let arr = []
    for(let i = 0 ; i <= t.length - p.length ; i++) {
        arr.push(parseInt(t.slice(i, i + p.length)))
    }
    arr = arr.filter((arr) => arr <= p)
    return arr.length;
}