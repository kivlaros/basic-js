const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof position == "number"){
        this.chain.splice(position-1,1);
    }
    else{
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    console.log(this.chain.map(e=>(`(${e})`)).join('~~'))
    return this.chain.map(e=>(`( ${e} )`)).join('~~')
  }
};

module.exports = {
  chainMaker
};
