   function solution(new_id) {
      new_id = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, "")
        .replace(/\.+/g, ".")
        .replace(/^\.|\.$/g, "")
        .replace(/^$/g, "a")
        .slice(0, 15)
        .replace(/\.$/g, "");
      return new_id.padEnd(3, new_id.charAt(new_id.length - 1));
    }