const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let res = '';
  for(let i=1;i<=options.repeatTimes;i++){
    res+=str;
    for(let j=1;j<=options.additionRepeatTimes;j++){
      res +=options.addition;
      if(j!==options.additionRepeatTimes){
      res +=options.additionSeparator;
      }
    }
    if(i!==options.repeatTimes){
      res+=options.separator;
    }
  }
  return res;
}

module.exports = {
  repeater
};
