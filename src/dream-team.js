const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if(!Array.isArray(arr)){
    return false
  }
  return arr.filter(e=>{
    return typeof e=='string';
  }).map(e=>(e.replace(/\s/g, "")[0]).toUpperCase()).sort().join('');
}

module.exports = {
  createDreamTeam
};
