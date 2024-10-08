// 作弊写法, eval(line)可以把字符串 line 当作 JavaScript 语句执行
// 用转义符\匹配大中小括号

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let line = await readline();
    line = line.replace(/[\{\}\[\]]/g, (match) => {
        if (match === "{") return "(";
        if (match === "}") return ")";
        if (match === "[") return "(";
        if (match === "]") return ")";
    });
    console.log(eval(line));
})();
