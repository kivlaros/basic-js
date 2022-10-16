const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let res = 0;
  const obj1 = toObj(s1);
  const obj2 = toObj(s2);
  for(key in obj1){
    if(typeof obj2[key]!=='undefined'){
      obj1[key]<obj2[key]?res+=obj1[key]:res+=obj2[key];
    }
  }
  return res;
}
function toObj(str){
  const result = str.split('').reduce((acc, rec) => {
  return (typeof acc[rec] !== 'undefined') 
    ? { ...acc, [rec]: acc[rec] + 1 } 
    : { ...acc, [rec]: 1 }
  }, {})
  return result;
}

module.exports = {
  getCommonCharacterCount
};
