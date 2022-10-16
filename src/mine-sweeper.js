const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((elem,index)=>{
    return elem.map((e,i)=>{
      e=0;
      console.log(matrix[index][i]);
      if(typeof matrix[index][i-1]!=='undefined'&&matrix[index][i-1]){e+=1};
      if(typeof matrix[index][i+1]!=='undefined'&&matrix[index][i+1]){e+=1};
      if(index!==matrix.length-1&&typeof matrix[index+1][i]!=='undefined'&&matrix[index+1][i]){e+=1};
      if(index!==0&&typeof matrix[index-1][i]!=='undefined'&&matrix[index-1][i]){e+=1};
      if(index!==0&&typeof matrix[index-1][i-1]!=='undefined'&&matrix[index-1][i-1]){e+=1};
      if(index!==matrix.length-1&&typeof matrix[index+1][i+1]!=='undefined'&&matrix[index+1][i+1]){e+=1};
      if(index!==matrix.length-1&&typeof matrix[index+1][i-1]!=='undefined'&&matrix[index+1][i-1]){e+=1};
      if(index!==0&&typeof matrix[index-1][i+1]!=='undefined'&&matrix[index-1][i+1]){e+=1};
      return e;
    })
  })
}

module.exports = {
  minesweeper
};
