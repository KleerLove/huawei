// n^3 1

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function longestPalindrome_bruteforce(s) {
    let maxLength = 0;
    let longestPalindrome = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let subStr = s.substring(i, j + 1);
            if (isPalindrome(subStr) && subStr.length > maxLength) {
                maxLength = subStr.length;
                longestPalindrome = subStr;
            }
        }
    }
    return longestPalindrome;
}

console.log(longestPalindrome_bruteforce("babad")); // Output: "bab" or "aba"


// 写法更简单的暴力算法
function longestPalindrome(line) {
    let result = 0;
    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j <= line.length; j++) { // 修正边界条件，包含 j
            const str = line.slice(i, j); // 获取从 i 到 j-1 的子串
            if (str === str.split('').reverse().join('')) { // 检查是否回文
                result = Math.max(result, str.length);
            }
        }
    }
    return result;
}
