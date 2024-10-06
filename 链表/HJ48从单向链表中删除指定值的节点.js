// 其实是一道字符串题, 题目给的就是字符串, 无语
// 数组插入/删除元素方法 => splice

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = await readline();
    line = line.split(' ').map(Number);
    const len = line.shift();
    const head = line.shift();
    const del = line.pop();

    const result = [head];
    for(let i = 0; i < line.length - 1; i += 2){
        const insert = line[i];
        const back = line[i + 1];
        const index = result.indexOf(back) + 1;
        result.splice(index, 0, insert);
    }

    const delIndex = result.indexOf(del);
    result.splice(delIndex, 1);
    console.log(result.join(' '));
}()
