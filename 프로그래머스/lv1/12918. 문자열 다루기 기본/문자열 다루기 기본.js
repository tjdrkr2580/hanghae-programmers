function solution(s) {
    let count = 0
    s = s.split('')
    if(s.length > 6 || (s.length < 4 || s.length === 5)) return false;
    for(let i = 0 ; i < s.length ; i++)
        if(s[i].charCodeAt() > 47 && s[i].charCodeAt() < 58) count += 1;
    return s.length === count
}