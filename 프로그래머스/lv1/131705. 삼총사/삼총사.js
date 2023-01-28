function solution(number, answer = 0) {
    for(let i = 0 ; i < number.length - 2 ; i++){
        for(let j = i+1 ; j < number.length - 1 ; j++){
            for(let k = j+1 ; k < number.length ; k++){
                if(samchongsa(number[i] + number[j] + number[k]) === true){
                    answer++;
                }
            }
        }
    }
    return answer;
}

function samchongsa(n) {
    if(n === 0) {
        return true;
    }
    else {
        return false;
    }
}