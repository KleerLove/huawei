// 正则 test
// /[a-z]/.test(char)
// => bool



const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    function checkPassword(password) {
        // 1. 检查密码长度是否超过 8 位
        if (password.length <= 8) {
            return "NG";
        }

        // 2. 检查是否包括大小写字母、数字、其它符号，至少三种
        let hasLower = false,
            hasUpper = false,
            hasDigit = false,
            hasSymbol = false;
            
        if (/[a-z]/.test(password)) hasLower = true;
        if (/[A-Z]/.test(password)) hasUpper = true;
        if (/[0-9]/.test(password)) hasDigit = true;
        if (/[^\w\d\s\n]/.test(password)) hasSymbol = true;

        // 统计满足的种类数
        let typeCount = [hasLower, hasUpper, hasDigit, hasSymbol].filter(
            Boolean
        ).length;
        if (typeCount < 3) {
            return "NG";
        }

        // 3. 检查是否存在长度大于2且包含公共元素的子串重复
        // 等价于 字符串中所有长度为3的子串是否重复
        for (let i = 0; i < password.length - 2; i++) {
            let substring = password.slice(i, i + 3); // 长度为3的子串
            // 前面的已经判断过, 从 i+3 开始判断
            if (password.indexOf(substring, i + 3) !== -1) {
                return "NG";
            }
        }

        // 如果满足所有要求
        return "OK";
    }
    while ((line = await readline())) {
        console.log(checkPassword(line));
    }
})();

