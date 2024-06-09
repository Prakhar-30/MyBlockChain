const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      prevBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }
}

const blockchain = new Blockchain();
blockchain.addBlock({ data: "data1" });
console.log(blockchain);

module.exports = blockchain;
