// flat可以扁平化数组, 但是一次调用只能扁平化一层

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let i = await readline();
    let r = await readline();
    i = i.split(' ');
    r = r.split(' ');
    len1 = i.shift();
    len2 = r.shift();
    let setR = new Set(r);
    setR = Array.from(setR).sort((a, b) => a - b);
    const copySetArr = Array.from(setR);
    let result = [];
    let count = 0
    for(const n of copySetArr){
        const tempArr = [];
        for(let t = 0; t < i.length; t++){
            if(i[t].indexOf(n) !== -1) tempArr.push([t, i[t]]);
        }
        const len = tempArr.length;
        if(len === 0){
            setR.splice(setR.indexOf(n), 1);
        }else{
            count += len * 2;
            tempArr.unshift([n, len]);
            result.push(tempArr);
        }
    }
    count += setR.length * 2;
    result = result.flat().flat().join(' ');
    console.log(`${count} ${result}`);
}()
