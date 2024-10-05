/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return bool布尔型
 */
function isValidString(s) {
    let low = 0,
        high = 0; // low 表示剩余的最少未匹配的左括号数，high 表示可能的最多未匹配的左括号数

    for (let char of s) {
        if (char === "(") {
            low++; // '(' 可能是左括号，增加 low
            high++; // '(' 一定是左括号，增加 high
        } else if (char === ")") {
            low = Math.max(low - 1, 0); // ')' 必须匹配左括号，所以减少 low, 不低于0
            high--; // ')' 减少可能的左括号
        } else {
            // '*' 可能是左括号、右括号或者空字符
            low = Math.max(low - 1, 0); // '*' 作为右括号时减少 low
            high++; // '*' 作为左括号时增加 high
        }

        if (high < 0) {
            // 如果 high < 0，说明右括号过多，不可能合法
            return false;
        }
    }

    // 遍历完后，low 为 0 表示所有左括号都成功匹配
    return low === 0;
}
module.exports = {
    isValidString: isValidString,
};
