    function solution(s, n) {
      s = s.split("").map((element) => element.charCodeAt());
      s = s.map((element) => {
        if (element === 32) {
          return String.fromCharCode(element);
        } else if (element >= 65 && element <= 90) {
          element += n;
          if (element > 90) {
            return String.fromCharCode(element - 26);
          }
          return String.fromCharCode(element);
        } else if (element >= 97 && element <= 122) {
          element += n;
          if (element > 122) {
            return String.fromCharCode(element - 26);
          }
          return String.fromCharCode(element);
        }
      });
      return s.join("");
    }