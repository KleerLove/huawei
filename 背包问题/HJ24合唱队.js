// 动态规划

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let n = await readline();
    n = parseInt(n);
    let line = await readline();
    line = line.split(" ").map(Number);
    console.log(minRemovalForChoir(n, line));
    function minRemovalForChoir(N, heights) {
        // 初始化 left 和 right 数组
        const left = new Array(N).fill(1); // 每个人自己就可以是递增子序列
        const right = new Array(N).fill(1); // 每个人自己就可以是递减子序列

        // 计算左边的递增序列长度
        for (let i = 1; i < N; i++) {
            for (let j = 0; j < i; j++) {
                if (heights[i] > heights[j]) {
                    left[i] = Math.max(left[i], left[j] + 1);
                }
            }
        }

        // 计算右边的递减序列长度
        for (let i = N - 2; i >= 0; i--) {
            for (let j = N - 1; j > i; j--) {
                if (heights[i] > heights[j]) {
                    right[i] = Math.max(right[i], right[j] + 1);
                }
            }
        }

        // 计算合唱队形的最大长度
        let maxChoirLength = 0;
        for (let i = 0; i < N; i++) {
            maxChoirLength = Math.max(maxChoirLength, left[i] + right[i] - 1);
        }

        // 需要移除的最少同学数
        return N - maxChoirLength;
    }
})();
