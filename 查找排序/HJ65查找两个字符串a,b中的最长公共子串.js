// 二维动态规划
// dp初始为 [短串长度][长串长度].fill(0)
// 两双循环从1开始, 短的在外层
// 若 a[i - 1] === b[j - 1], 则 dp[i][j] = dp[i - 1][j - 1] + 1
// 当 dp[i][j] > maxLength, 更新 maxLength 为 dp[i][j], endIndex 为 i


void (async function () {
    line1 = await readline();
    line2 = await readline();
    function longestCommonSubstring(a, b) {
        // 确保 a 是较短的字符串，b 是较长的字符串
        if (a.length > b.length) {
            [a, b] = [b, a];
        }

        let maxLength = 0;
        let endIndex = 0;
        let dp = Array(a.length + 1).map(() => Array(b.length + 1).fill(0));

        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                if (a[i - 1] === b[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    if (dp[i][j] > maxLength) {
                        maxLength = dp[i][j];
                        endIndex = i;
                    }
                }
            }
        }

        // 从 endIndex 开始截取最长公共子串
        return a.substring(endIndex - maxLength, endIndex);
    }
    console.log(longestCommonSubstring(line1, line2))
})();



// 滑动窗口
// 交换基本数据类型
// [a, b] = [b, a];
void (async function () {
    line1 = await readline();
    line2 = await readline();
    function longestCommonSubstring(a, b) {
        // 确保 a 是较短的字符串，b 是较长的字符串
        if (a.length > b.length) {
            [a, b] = [b, a];
        }

        let maxLength = 0;
        let longestSubstr = "";

        // 遍历较短的字符串，从每个字符开始，逐步扩展子串
        for (let i = 0; i < a.length; i++) {
            for (let j = i + 1; j <= a.length; j++) {
                let subStr = a.slice(i, j);
                if (b.includes(subStr) && subStr.length > maxLength) {
                    maxLength = subStr.length;
                    longestSubstr = subStr;
                }
            }
        }

        return longestSubstr;
    }
    console.log(longestCommonSubstring(line1, line2));
})();