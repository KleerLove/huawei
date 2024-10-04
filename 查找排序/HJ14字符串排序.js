// 将字符串数组按照字典序排序
// arr.sort()



const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const n = await readline();
    const arr = [];
    for(let i = 0; i < n; i++){
        let word = await readline();
        arr.push(word);
    }
    arr.sort();
    for(const w of arr){
        console.log(w);
    }
}()
