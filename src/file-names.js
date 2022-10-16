const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  return arr.reduce((acc,elem,index)=>{
    if(index>0){
      if(acc.some((e,i)=>{
        if(i!==index){
          return e==elem;
        }
      })){
        acc[index] = elem+'(1)';
            if(index>0){
              let i=1;
              do{
                console.log(acc[index]);
                acc[index] = elem+`(${i})`;
                i+=1;
              }while(acc.slice(0, index-1).some((e,i)=>(e==acc[index])))
            }
      }
    }
    return acc
  },arr)
}

module.exports = {
  renameFiles
};
