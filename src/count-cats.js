const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
return backyard.reduce((acum,elem)=>{
    elem.forEach((e)=>{
      if(e === "^^"){
        acum+=1;
      }
    })
    return acum;
  },0)
}

module.exports = {
  countCats
};
