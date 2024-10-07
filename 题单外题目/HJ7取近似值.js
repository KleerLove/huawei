// parseFloat(str) 转化为浮点数(不要用 paraseInt 会直接转化为整数)
// Math.round(num) 实现四舍五入

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = await readline();
    line = parseFloat(line);
    console.log(Math.round(line))
}()
