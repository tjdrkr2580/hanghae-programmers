function solution(x) {
    let slice_num = 0;
    String(x).split('').map((x) => slice_num += parseInt(x));
    return x % slice_num == 0;
}