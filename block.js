const {GENESIS_DATA}=require('./config');
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
}

const block1=new block({
    timestamp:'9/6/24',prevHash:'0xacb',hash:'0xc12',data:'hello'});
const block2=new block({
    prevHash:'0xc12',timestamp:'10/6/24',hash:'0x123',data:'world'});
const genesisBlock=block.genesis();
console.log(genesisBlock);
console.log(block1);
console.log(block2);
