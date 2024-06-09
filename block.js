const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
    constructor({ timestamp, prevHash, hash, data }) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ prevBlock, data }) {
        const timestamp = Date.now();
        const prevHash = prevBlock.hash;
        return new Block({
            timestamp,
            prevHash,
            data,
            hash: cryptoHash(timestamp, prevHash, data),
        });
    }
}

// Uncomment these to test genesis and mineBlock
// const genesisBlock = Block.genesis();
// console.log(genesisBlock);

// const result = Block.mineBlock({ prevBlock: genesisBlock, data: "block2" });
// console.log(result);

module.exports = Block;
