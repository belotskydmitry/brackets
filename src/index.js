module.exports = function check(str, bracketsConfig) {
  /*let st = [];
  let br = bracketsConfig.join('').replace(/,/g, '');

  for (let bracket of str) {
    let brIn = br.indexOf(bracket);

    if(brIn % 2 === 0) {
      st.push(brIn);

      if (bracket === br[brIn + 1]) {
        st.pop();
      }
    } else {
      if (st.pop() !== brIn - 1) {
        return false;
      }
    }
  } return st.length === 0;*/
  
  let chars = 0;

  bracketsConfig.forEach((item, numb) => bracketsConfig[numb] = String(item[0] + item[1]));
  while (true) {
    bracketsConfig.forEach((item) => str = str.replace(item, ''));
    if (str === '') return true;
    if (chars === str.length) return false;
    chars = str.length;
  }
}