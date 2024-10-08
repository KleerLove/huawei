// A的ascii码是65, a的ascii码是97

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const key = await readline();
    const str = await readline();
    const keySet = new Set(key.toUpperCase());
    const keyArr = Array.from(keySet);
    const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const tableArr = table.split('');
    for(const n of keyArr){
        const index = n.charCodeAt('0') - 65;
        tableArr.splice(index, 1, -1);
    }
    const newTableArr = tableArr.filter((item) => item !== -1);
    const passwordTable = keyArr.concat(newTableArr);

    let ciphertext = '';
    for(const n of str){
        if(n >= 'A' && n <= 'Z'){
            const index = n.charCodeAt('0') - 65;
            ciphertext += passwordTable[index];
        }else if(n >= 'a' && n <= 'z'){
            const index = n.charCodeAt('0') - 97;
            ciphertext += passwordTable[index].toLowerCase();
        }else{
            ciphertext += n;
        }
    }
    console.log(ciphertext);
}()
