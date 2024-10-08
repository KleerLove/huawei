// 构建二维空数组方法 注意 .fill() 是必要的
// new Array(n).fill().map(() => Array())

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const line = await readline();
    const n = parseInt(line);
    let res = new Array(n).fill().map(() => Array());
    let cur = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i; j >= 0; j--) {
            res[j].push(cur);
            cur++;
        }
    }
    for (let line of res) {
        console.log(line.join(" "));
    }
})();
