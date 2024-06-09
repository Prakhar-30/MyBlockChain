const hexToBinary=require("hex-to-binary");
const { GENESIS_DATA, MINE_RATE } = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
  constructor({ timestamp, prevHash, hash, data, nonce, difficulty }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.nonce = nonce;
    this.difficulty = difficulty;
    this.data = data;
  }

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ prevBlock, data }) {
    let hash, timestamp;
    const prevHash = prevBlock.hash;
    let { difficulty } = prevBlock;

    let nonce = 0;
    do {
      nonce++;
      timestamp = Date.now();
      difficulty=Block.adjustDifficulty({
        originalBlock:prevBlock,
        timestamp,
      });
      hash = cryptoHash(timestamp, prevHash, data, nonce, difficulty);
    } while (hexToBinary(hash).substring(0, difficulty) !== "0".repeat(difficulty));
    return new Block({
      timestamp,
      prevHash,
      data,
      difficulty,
      nonce,
      hash,
    });
  }

  static adjustDifficulty({originalBlock,timestamp}){
    const {difficulty}=originalBlock;
    if(difficulty<1) return 1;

    const difference =timestamp-originalBlock.timestamp;
    if(difference>MINE_RATE)return difficulty-1;
    return difficulty+1;
  }

}




// const genesisBlock = Block.genesis();
// console.log(genesisBlock);

// const result = Block.mineBlock({ prevBlock: genesisBlock, data: "block2" });
// console.log(result);

module.exports = Block;
