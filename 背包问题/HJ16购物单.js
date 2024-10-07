// out
// 一道巨难的动态规划

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let base = 10; //题目中最小间隔10
    let line1 = await readline();
    let [sum, num] = line1.split(" ");
    sum = sum / base;
    let list = {};
    for (let i = 0; i < num; i++) {
        let line2 = await readline();
        let [a, b, c] = line2.split(" ").map(Number);
        if (c) {
            //lines[2]如果上面没有Number转换的话输入的是字符串0，if('0')为true
            list[c] = list[c] || [];
            list[c][1] = list[c][1] || [];
            list[c][1].push(a / base, (a / base) * b);
        } else {
            list[i + 1] = list[i + 1] || [];
            list[i + 1][0] = [a / base, (a / base) * b];
        }
    }
    list = [...Object.values(list)];
    buy(list);
    function buy(m) {
        let len = m.length;
        let dp = Array.from({ length: len }, (e) => new Array(sum + 1).fill(0));
        dp[-1] = new Array(sum + 1).fill(0); //加一行-1用于第一行初始化中的边界i-1的判断
        for (let i = 0; i < len; i++) {
            for (let j = 1; j <= sum; j++) {
                if (j < m[i][0][0]) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    //一共只有0，1,2个配件3种情况，手写3种判断，w、v分别代表重量和价值
                    let w1, w2, v1, v2;
                    m[i][1] &&
                        ((w1 = m[i][1][0]),
                            (v1 = m[i][1][1]),
                            (w2 = m[i][1][2]),
                            (v2 = m[i][1][3]));
                    dp[i][j] = Math.max(
                        dp[i - 1][j],
                        dp[i - 1][j - m[i][0][0]] + m[i][0][1]
                    );
                    //+undefined为NaN，NaN做判断都是false
                    j >= m[i][0][0] + w1 &&
                        (dp[i][j] = Math.max(
                            dp[i][j],
                            dp[i - 1][j - m[i][0][0] - w1] + m[i][0][1] + v1
                        ));
                    //此处w2也用dp[i][j](上面w1比较后的结果)作比较，即v1,v2也在此处做了比较了
                    j >= m[i][0][0] + w2 &&
                        (dp[i][j] = Math.max(
                            dp[i][j],
                            dp[i - 1][j - m[i][0][0] - w2] + m[i][0][1] + v2
                        ));
                    j >= m[i][0][0] + w1 + w2 &&
                        (dp[i][j] = Math.max(
                            dp[i][j],
                            dp[i - 1][j - m[i][0][0] - w1 - w2] + m[i][0][1] + v1 + v2
                        ));
                }
            }
        }
        console.log(dp[len - 1][sum] * base);
    }
})();
