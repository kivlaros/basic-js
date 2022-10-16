const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr){
  if(arr.length==0){
    return {};
  }
  const arrS = arr.map(e=>{
    return concArr(e.split('.'))
  })
  return toObj(arrS.join(',').split(','));
}
function concArr(arr){
  let res = [];
  let sum = '';
  for(let i = arr.length-1;i>=0;i--){
    sum = sum+'.'+arr[i];
    res.push(sum);
  }
  return res;
}
function toObj(arr){
    const result = arr.reduce((acc, rec) => {
    return (typeof acc[rec] !== 'undefined') 
      ? { ...acc, [rec]: acc[rec] + 1 } 
      : { ...acc, [rec]: 1 }
    }, {})
    return result;
}

module.exports = {
  getDNSStats
};
