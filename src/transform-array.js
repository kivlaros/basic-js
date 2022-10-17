const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  const str = '--double-prev, --discard-prev, --double-next, --discard-next'
  if(!Array.isArray(arr)){
    throw Error("'arr' parameter must be an instance of the Array!")
  }
  let last = 0;
  return arr.reduce((acc,e,i)=>{
    if(i!==0){
      if(e=='--double-prev'){
        console.log(last,i)
        acc.push(arr.slice(last,i));
        if(acc[acc.length-1].length!==0){
          acc[acc.length-1].push(arr[i-1]);
        }
        last = i;
      }
      if(e=='--discard-prev'){
        acc.push(arr.slice(last,i-1));
        last = i;
      }
    }
    if(i<arr.length-1){
      if(e=='--double-next'){
        acc.push(arr.slice(last,i+1));
        acc[acc.length-1].push(arr[i+1]);
        last = i+1;
      }
      if(e=='--discard-next'){
        acc.push(arr.slice(last,i));
        last = i+2;
      }
    }
    if(i==arr.length-1){
      acc.push(arr.slice(last,i+1));
      //console.log(acc)
    }
    return acc;
  },[]).reduce((acc,e)=>{
          acc.push(...e);
          return acc
        },[]).filter(e=>!str.includes(e));
}

module.exports = {
  transform
};
