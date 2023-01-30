function solution(array, commands, answer = []) {
    let arr2 = [];
    for(let i = 0 ; i < commands.length ; i++) {
        arr2 = array.slice(commands[i][0] - 1,commands[i][1]).sort((a,b) => a-b);
        answer.push(arr2[commands[i][2] - 1])
    }
    return answer;
}