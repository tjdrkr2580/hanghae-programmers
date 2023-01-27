function solution(s) {
    let words = s.split(' ')
    let word;
    let arr = [];
    words.map((element, index) => {
        word = element.split('')
        word.map((element, index) => {
            if(index % 2 === 0) {
              arr.push(element.toUpperCase())    
            }
            else {
                arr.push(element.toLowerCase())
            }
        })
        if(words.length - 1 === index) {
            return null
        }
        else {
            arr.push(' ')
        }
    })
    return arr.join('')
}