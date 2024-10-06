// new Set([0]) 可以这样初始化set的值为0


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const n = await readline();
    let m = await readline();
    let x = await readline();
    m = m.split(" ").map(Number);
    x = x.split(" ").map(Number);

    console.log(distinctWeights(m, x));

    function distinctWeights(weights, quantities) {
        // 创建一个Set来存储所有可能的称重结果，初始化为0（代表不放砝码）
        const possibleWeights = new Set([0]);

        // 遍历每种砝码
        for (let i = 0; i < weights.length; i++) {
            const currentWeight = weights[i];
            const currentQuantity = quantities[i];

            // 当前Set中的所有重量复制一份
            const currentPossibleWeights = Array.from(possibleWeights);

            // 遍历数量，从1到currentQuantity
            for (let q = 1; q <= currentQuantity; q++) {
                // 根据已有的每个可能重量，加上当前砝码的总重量，放入possibleWeights
                for (let weight of currentPossibleWeights) {
                    possibleWeights.add(weight + q * currentWeight);
                }
            }
        }

        // 返回Set中的元素个数，即为可称出的不同重量数
        return possibleWeights.size;
    }
    // console.log(m)
})();
