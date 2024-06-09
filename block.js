const {GENESIS_DATA}=require('./config');
const cryptoHash = require('./crypto-hash');


class block{
    constructor({timestamp,prevHash,hash,data}){
        this.timestamp=timestamp;
        this.prevHash=prevHash;
        this.hash=hash;
        this.data=data;
    }
    static genesis(){
        return new this(GENESIS_DATA);
    }
    static mineBlock({prevBlock,data}){
        const timestamp=Date.now();
        const prevHash=prevBlock.hash;
        return new block({
            timestamp,
            prevHash,
            data,
            hash:cryptoHash(timestamp,prevHash,data),
        });
    }
}

const block1=new block({
    timestamp:'9/6/24',prevHash:'0xacb',hash:'0xc12',data:'hello'});
const block2=new block({
    prevHash:'0xc12',timestamp:'10/6/24',hash:'0x123',data:'world'});


const genesisBlock=block.genesis();
console.log(genesisBlock);


const result=block.mineBlock({prevBlock:block1,data:"block2"});
console.log(result);