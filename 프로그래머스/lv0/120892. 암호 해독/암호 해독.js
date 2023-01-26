function solution(cipher, code) {
   let arr = [...cipher].filter((char, i) => {return (i+1)%code === 0})
   return arr.join('')
}