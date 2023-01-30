function solution(N, stages) {
    let answer = [];
    let peoples = stages.length;
    //stages에는 1이상 N+1
    //전체 인원 -1 씩 
    for(let i = 1 ; i <= N ; i++){
        let dontClear = stages.filter(element => element === i).length;
        let fail = dontClear / peoples;
        peoples -= dontClear;
        answer.push({stage : i, fail });
    }
    answer.sort((a, b) => {
        if(a.fail === b.fail) return a.stage - b.stage;
        else return b.fail - a.fail;
    })
    return answer.map((element) => element.stage)
}