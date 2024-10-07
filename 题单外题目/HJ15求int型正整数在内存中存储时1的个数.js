// 将十进制数转化为n进制数方法 num.toString(n)
// 将n进制数转化为十进制数方法 parseInt(num, n)

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = await readline();
    line = parseInt(line);
    const two = line.toString(2);
    let count = 0;
    for(const n of two){
        if(n === '1') count++;
    }
    console.log(count);
}()
