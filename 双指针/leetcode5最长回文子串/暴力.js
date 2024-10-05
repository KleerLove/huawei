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
