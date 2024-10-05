// n^2 1

function longestPalindrome_twoPointers(s) {
    let start = 0, end = 0;

    function expandFromMiddle(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expandFromMiddle(i, i); // odd-length palindrome
        let len2 = expandFromMiddle(i, i + 1); // even-length palindrome
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

console.log(longestPalindrome_twoPointers("cbbd")); // Output: "bb"
