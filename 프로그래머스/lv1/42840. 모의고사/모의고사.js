function solution(answers) {
    let result = []
    let answer1 = [ 1, 2, 3, 4, 5]
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let answer3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let num1 = answers.filter((answer,i) => answer === answer1[i%5]).length;
    let num2 = answers.filter((answer,i) => answer === answer2[i%8]).length;
    let num3 = answers.filter((answer,i) => answer === answer3[i%10]).length;
    
    max = Math.max(num1,num2,num3)
   
    if(max <= num1) {
        result.push(1);
    }
     if(max <= num2) {
         result.push(2);
    }
     if(max <= num3) {
        result.push(3);
    }
    
    return result
    
}