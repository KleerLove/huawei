/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) {
        return "";
    }

    const tFreq = {};
    for (let char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1;
    }

    let required = Object.keys(tFreq).length;
    let l = 0, r = 0;
    let formed = 0;
    const windowCounts = {};
    let minLen = Infinity, minStart = 0;

    while (r < s.length) {
        let char = s[r];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (tFreq[char] && windowCounts[char] === tFreq[char]) {
            formed++;
        }

        while (l <= r && formed === required) {
            char = s[l];

            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                minStart = l;
            }

            windowCounts[char]--;
            if (tFreq[char] && windowCounts[char] < tFreq[char]) {
                formed--;
            }

            l++;
        }

        r++;
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// 灵神
var minWindow = function(s, t) {
    const m = s.length;
    let ansLeft = -1, ansRight = m;
    const cnt = Array(128).fill(0);
    let less = 0;
    for (let c of t) {
        c = c.codePointAt(0);
        if (cnt[c] === 0) {
            less++; // 有 less 种字母的出现次数 < t 中的字母出现次数
        }
        cnt[c]++;
    }

    let left = 0;
    for (let right = 0; right < m; right++) { // 移动子串右端点
        const c = s[right].codePointAt(0); // 右端点字母
        cnt[c]--; // 右端点字母移入子串
        if (cnt[c] === 0) {
            // 原来窗口内 c 的出现次数比 t 的少，现在一样多
            less--;
        }
        while (less === 0) { // 涵盖：所有字母的出现次数都是 >=
            if (right - left < ansRight - ansLeft) { // 找到更短的子串
                ansLeft = left; // 记录此时的左右端点
                ansRight = right;
            }
            const x = s[left].codePointAt(0); // 左端点字母
            if (cnt[x] === 0) {
                // x 移出窗口之前，检查出现次数，
                // 如果窗口内 x 的出现次数和 t 一样，
                // 那么 x 移出窗口后，窗口内 x 的出现次数比 t 的少
                less++;
            }
            cnt[x]++; // 左端点字母移出子串
            left++;
        }
    }
    return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1);
};