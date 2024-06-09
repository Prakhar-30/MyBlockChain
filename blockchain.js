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

  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }
    for (let i = 1; i < chain.length; i++) {
      const { timestamp, prevHash, hash, data } = chain[i];
      const realLastHash = chain[i - 1].hash;
      if (prevHash !== realLastHash) return false;
      const validatedHash = cryptoHash(timestamp, prevHash, data);
      if (hash !== validatedHash) return false;
    }
    return true;
  }

  replaceChain(chain) {
    if (chain.length <= this.chain.length) {
      console.error("The incomming chain is not longer");
      return;
    }
    if (!Blockchain.isValidChain(chain)) {
      console.error("the incoming chain is not valid");
      return;
    }
    this.chain = chain;
  }
}

const blockchain = new Blockchain();
blockchain.addBlock({ data: "data1" });
console.log(blockchain);

module.exports = blockchain;
