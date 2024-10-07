const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let num = await readline();
    num = parseInt(num);
    let arr = []; // 结果数组
    let i = 2;
    while (i <= num && i * i <= num) {
        // 没有这个判断超时 i * i <= num
        if (num % i === 0) {
            arr.push(i);
            num /= i;
        } else {
            i++;
        }
    }

    if (num != 1) {
        arr.push(num);
    }
    console.log(arr.join(" "));
})();
