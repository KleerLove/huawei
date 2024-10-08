const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let n = await readline();
    n = parseInt(n);
    let arr = [0];
    for (let i = 1; i <= n; i++) {
        let rabbitCanBirth = 0;
        for(let i = 0; i < arr.length; i++){
            if (arr[i] < 3) arr[i]++;
            if (arr[i] === 3) rabbitCanBirth++;
        }
        arr = arr.concat(Array(rabbitCanBirth).fill(1));
    }
    console.log(arr.length);
})();
