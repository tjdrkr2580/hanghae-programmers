function solution(sizes) {
    for(let i = 0 ; i < sizes.length ; i++) {
        if(sizes[i][0] < sizes[i][1]) {
        [sizes[i][0],sizes[i][1]] = [sizes[i][1], sizes[i][0]]
        }
    }
    let w = sizes.sort((a,b) => b[0] - a[0])[0][0];
    let h = sizes.sort((a,b) => b[1] - a[1])[0][1];
    return w * h
}