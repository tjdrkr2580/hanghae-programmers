    function solution(s, n) {
      let arr = s.split("").map((element) => element.charCodeAt());
      arr = arr.map((element) => {
        console.log(element);
           if (element >= 65 && element <= 90) {
            element += n;
        if (element > 90) {
          element -= 26;
        }
      }
      else if (element >= 97 && element <= 122) {
        element += n;
        if (element > 122) {
          element -= 26;
        }
      }
          return String.fromCharCode(element);
      });
        return arr.join('')
    }