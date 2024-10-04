const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let arr = await readline();
    arr = arr.split(' ');
    const n = arr.shift();
    const k = arr.pop();
    const x = arr.pop();
    let sortX = x.split('').sort().join('');

    const brother = [];
    for(const w of arr){
        if(w !== x && w.split('').sort().join('') === sortX){
            brother.push(w);
        }
    }
    brother.sort();
    console.log(brother.length);
    const result = brother[k - 1];
    if(result) console.log(result);

}()
