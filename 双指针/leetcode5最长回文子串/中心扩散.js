// n^2 1

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}

function longestPalindrome_center(s) {
    if (s.length < 2) return s;
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        let oddPal = expandAroundCenter(s, i, i);
        if (oddPal.length > longest.length) longest = oddPal;

        // Even length palindromes
        let evenPal = expandAroundCenter(s, i, i + 1);
        if (evenPal.length > longest.length) longest = evenPal;
    }

    return longest;
}

console.log(longestPalindrome_center("babad")); // Output: "bab" or "aba"
