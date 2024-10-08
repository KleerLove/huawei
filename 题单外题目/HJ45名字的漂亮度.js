const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let n = await readline();
    n = parseInt(n);
    while(n > 0){
        let line = await readline();
        line = line.toLowerCase();
        const arr = new Array(26).fill(0);
        let len = 0;
        for(const n of line){
            const index = n.charCodeAt('0') - 97;
            if(arr[index] === 0) len++;
            arr[index]++;
        }
        let beauty = 26;
        let i = 0;
        let result = 0;
        while(i < len){
            const max = Math.max(...arr);
            let index = arr.indexOf(max);
            while(index !== -1){
                result += arr[index] * beauty;
                arr[index] = 0;
                beauty--;
                i++;
                index = arr.indexOf(max);
            }
        }
        console.log(result);
        n--;
    }
}()
