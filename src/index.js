module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  for (let l of str) {
    for (let b of bracketsConfig) {
      if (l == b[0] && l == b[1]) {
        brackets[brackets.length - 1] == l ? brackets.pop() : brackets.push(l);
      } else if (l == b[0]) {
        brackets.push(l);
      } else if (l == b[1]) {
        if (brackets[brackets.length - 1] == b[0]) {
          brackets.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !brackets.length;
};
