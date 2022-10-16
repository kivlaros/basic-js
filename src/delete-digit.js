const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num){
  res = [];
  arr = num.toString().split('');
  arr.forEach((e,index,array)=>{
    if(index!==arr.length){
      res.push(+array.slice(0,index).concat(array.slice(index+1)).join(',').replaceAll(',', ''))
    }
  })
  console.log(res);
  return Math.max.apply(Math, res);
}

module.exports = {
  deleteDigit
};
