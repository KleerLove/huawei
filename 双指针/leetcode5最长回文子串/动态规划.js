// n^2 n^2

function longestPalindrome_dp(s) {
    let n = s.length;
    if (n < 2) return s;

    let dp = Array.from(Array(n), () => Array(n).fill(false));
    let start = 0, maxLength = 1;

    for (let i = 0; i < n; i++) {
        dp[i][i] = true; // single character is always a palindrome
    }

    for (let end = 1; end < n; end++) {
        for (let startIdx = 0; startIdx < end; startIdx++) {
            if (s[startIdx] === s[end]) {
                if (end - startIdx === 1 || dp[startIdx + 1][end - 1]) {
                    dp[startIdx][end] = true;
                    if (end - startIdx + 1 > maxLength) {
                        start = startIdx;
                        maxLength = end - startIdx + 1;
                    }
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindrome_dp("babad")); // Output: "bab" or "aba"
