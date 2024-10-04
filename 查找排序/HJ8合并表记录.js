// 用对象作为哈希表并构建
// obj[key] = (obj[key] || 0) + val;
// 获取对象的键并转换为数组以排序
// const sortedKeys = Object.keys(obj).sort((a, b) => a - b);



const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let n = await readline();
    n = parseInt(n);
    let obj = {};
    for (let i = 0; i < n; i++) {
        let dui = await readline();
        dui = dui.split(" ").map(Number);
        const key = dui[0];
        const val = dui[1];
        obj[key] = (obj[key] || 0) + val;
    }
    const sortedKeys = Object.keys(obj).sort((a, b) => a - b);

    sortedKeys.forEach((key) => {
        console.log(`${key} ${obj[key]}`);
    });
})();
