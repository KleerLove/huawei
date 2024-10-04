// 位运算
// 使用 >>> 0 强制将其作为无符号整数处理
// decimal & ((2 ** n) - 1) 获取十进制转化为二进制后的数的前 n 位



const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const ip = await readline();
    const integer = await readline();

    // 将IP地址转换为十进制数
    function ipToDecimal(ip) {
        const segments = ip.split("."); // 将IP地址按'.'拆分
        let decimal = 0;
        for (let i = 0; i < segments.length; i++) {
            decimal = (decimal << 8) + parseInt(segments[i]);
        }
        // 使用 >>> 0 强制将其作为无符号整数处理
        return decimal >>> 0;
    }

    // 将十进制数转换为IP地址
    function decimalToIp(decimal) {
        const segments = [];
        for (let i = 3; i >= 0; i--) {
            segments[i] = decimal & 255; // 获取当前8位
            decimal = decimal >> 8; // 右移8位
        }
        return segments.join(".");
    }

    console.log(ipToDecimal(ip));
    console.log(decimalToIp(integer));
})();
