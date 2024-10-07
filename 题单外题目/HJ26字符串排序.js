// 提取英文字母，并保留大小写顺序
// let letters = [...str].filter((char) => /[a-zA-Z]/.test(char));
// 根据字母表顺序进行不区分大小写的排序
// letters.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const line = await readline();
    console.log(customSort(line));
    
    function customSort(str) {
        // 提取英文字母，并保留大小写顺序
        let letters = [...str].filter((char) => /[a-zA-Z]/.test(char));

        // 根据字母表顺序进行不区分大小写的排序
        letters.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        // 遍历字符串，将排序后的字母插入到原字母的位置，非字母保持原位
        let result = [];
        let letterIndex = 0;

        for (let i = 0; i < str.length; i++) {
            if (/[a-zA-Z]/.test(str[i])) {
                result.push(letters[letterIndex]);
                letterIndex++;
            } else {
                result.push(str[i]);
            }
        }

        return result.join("");
    }
})();
