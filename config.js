const INITIAL_DIFFICULTY=4;
const MINE_RATE=7000;//7s
const GENESIS_DATA={
    timestamp:1,
    prevHash:'0x000',
    hash:'0x123',
    difficulty:INITIAL_DIFFICULTY,
    nonce:0,
    data:[]
}
module.exports={GENESIS_DATA,MINE_RATE};