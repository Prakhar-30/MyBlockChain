class block{
    constructor(timestamp,prevHash,hash,data){
        this.timestamp=timestamp;
        this.prevHash=prevHash;
        this.hash=hash;
        this.data=data;
    }
}

const block1=new block('9/6/24','0xacb','0xc12','hello');
const block2=new block('10/6/24','0xc12','0x123','world');
console.log(block1);
console.log(block2);
