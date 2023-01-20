function solution(strings, n) {
    strings.sort((a,b) => {
       if(a.split("")[n] < b.split("")[n]) return -1
        else if(a.split("")[n] == b.split("")[n]){
            if(a > b) return 1
            else return -1
        }
        else return 1;
    })
    return strings;
}