const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let n = await readline();
    n = parseInt(n);
    const flag = await readline();
    const arr = [];
    for(let i = 0; i < n; i++){
        let t = await readline();
        t = t.split(' ');
        t[1] = parseInt(t[1]);
        arr.push(t);
    }
    if(flag === '0'){
        arr.sort((a, b) => b[1] - a[1]);
    }else if(flag === '1'){
        arr.sort((a, b) => a[1] - b[1]);
    }
    for(const m of arr){
        console.log(`${m[0]} ${m[1]}`)
    }
}()
