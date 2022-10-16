const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let acc = 1;
  let res = '';
  for(let i=0;i<str.length;i++){
    if(str[i]==str[i+1]){
      acc+=1;
    }
    else{
      res += acc+str[i];
      acc = 1;
    }
  }
  return res.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
