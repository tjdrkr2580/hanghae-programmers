function solution(lottos, win_nums) {
    const ranks = [6,6,5,4,3,2,1];
    let low = lottos.filter(element => win_nums.includes(element)).length;
    let zero = lottos.filter((element) => element === 0).length;
    return [ranks[low + zero], ranks[low]];
}