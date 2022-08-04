module.exports = function check(str, bracketsConfig) {
  let st = [];
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
  } return st.length === 0;
}
