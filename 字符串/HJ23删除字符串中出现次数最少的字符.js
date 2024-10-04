// 使用对象作为哈希表可以省去考虑顺序的麻烦(可以直接设置键和值)
// 获取对象值的最小值方法
// Math.min(...Object.values(charCount))


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const line = await readline();
    
    function removeLeastFrequentChars(str) {
        // 第一步：统计每个字符出现的次数
        const charCount = {};
        for (let char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        // 第二步：找到出现次数最少的字符的出现次数
        const minCount = Math.min(...Object.values(charCount));

        // 第三步：删除所有出现次数等于最少次数的字符
        const result = str
            .split("")
            .filter((char) => charCount[char] > minCount);

        // 第四步：返回删除后的字符串
        return result.join("");
    }

    console.log(removeLeastFrequentChars(line));
})();
