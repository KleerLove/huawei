// 正则替换方法: str.replace(/[^a-zA-Z]/g, " ");

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const line = await readline();
    const newStr = line.replace(/[^a-zA-Z]/g, " ");
    const arr = newStr.split(' ');
    arr.reverse();
    console.log(arr.join(' '));
}()
