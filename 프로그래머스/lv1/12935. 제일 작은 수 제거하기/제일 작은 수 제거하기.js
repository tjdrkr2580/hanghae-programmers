function solution(arr, min = 9999999) {
    for(let i = 0 ; i < arr.length ; i++)
        if(min > arr[i] ) min = arr[i];
    return arr.length === 1 ? [-1] : arr.filter((element) => element !== min )
  }