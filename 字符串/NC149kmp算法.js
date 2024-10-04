/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 计算模板串S在文本串T中出现了多少次
 * @param S string字符串 模板串
 * @param T string字符串 文本串
 * @return int整型
 */
function kmp(S, T) {
    const n = T.length;
    const m = S.length;

    // 特殊情况，如果模板串为空，直接返回0
    if (m === 0) return 0;

    // 构建部分匹配表（LPS表）
    const lps = buildLPS(S);

    let i = 0; // 文本串 T 的指针
    let j = 0; // 模板串 S 的指针
    let count = 0; // 用于记录匹配次数

    while (i < n) {
        if (T[i] === S[j]) {
            i++;
            j++;
        }

        if (j === m) {
            count++; // 找到一次匹配
            j = lps[j - 1]; // 跳回前一个最长前缀的位置
        } else if (i < n && T[i] !== S[j]) {
            if (j !== 0) {
                j = lps[j - 1]; // 利用部分匹配表跳转
            } else {
                i++; // 直接匹配下一个字符
            }
        }
    }

    return count;
}

// 构建部分匹配表（LPS表）
function buildLPS(S) {
    const lps = Array(S.length).fill(0);
    let length = 0;
    let i = 1;

    while (i < S.length) {
        if (S[i] === S[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // 回退到上一个最长前缀
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

module.exports = {
    kmp: kmp,
};
