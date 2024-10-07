// console.log(a++) 的 ++ 不会在输出前执行, 所以请用 a + 1

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        if(line === '0') return;
        let tokens = parseInt(line);
        let result = 0;
        while(tokens >= 3){
            const bottle = Math.floor(tokens / 3)
            result += bottle;
            tokens = bottle + tokens % 3;
        }
        console.log(tokens === 2 ? result + 1 : result);
    }
}()
