// .map 内的 return 不会立刻终止函数, 而是会把 return 的内容加到 map 的返回值中

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((line = await readline())) {
        const ip1 = await readline();
        const ip2 = await readline();
        console.log(checkSameSubnet(line, ip1, ip2));
        function isValidIP(ip) {
            // 验证IP地址是否合法
            const segments = ip.split(".");
            if (segments.length !== 4) return false;
            return segments.every((segment) => {
                const num = parseInt(segment);
                return num >= 0 && num <= 255 && String(num) === segment;
            });
        }

        function isValidMask(mask) {
            // 验证子网掩码是否合法
            const segments = mask.split(".");
            if (segments.length !== 4) return false;
            let binaryMask = segments
                .map((segment) => {
                    const num = parseInt(segment);
                    if (num < 0 || num > 255 || String(num) !== segment)
                        return false; // GPT这里其实是错误的, 这个return不能使函数立刻返回false, 而是会把false加入到binaryMask中
                    return num.toString(2).padStart(8, "0");
                })
                .join("");

            // 掩码应为前面全是1，后面全是0
            if(binaryMask.indexOf('false') !== -1) return false; // 为GPT前面的错误打的补丁
            const firstZero = binaryMask.indexOf("0");
            const lastOne = binaryMask.lastIndexOf("1");
            return lastOne < firstZero;
        }

        function ipToBinary(ip) {
            // 将IP地址转换为二进制字符串
            return ip
                .split(".")
                .map((segment) => {
                    return parseInt(segment).toString(2).padStart(8, "0");
                })
                .join("");
        }

        function checkSameSubnet(mask, ip1, ip2) {
            // 验证IP地址和子网掩码是否合法
            if (!isValidIP(ip1) || !isValidIP(ip2) || !isValidMask(mask)) {
                return 1; // 格式非法
            }

            const binaryMask = ipToBinary(mask);
            const binaryIP1 = ipToBinary(ip1);
            const binaryIP2 = ipToBinary(ip2);

            // 进行AND运算
            const network1 = binaryIP1
                .split("")
                .map((bit, index) => bit & binaryMask[index])
                .join("");
            const network2 = binaryIP2
                .split("")
                .map((bit, index) => bit & binaryMask[index])
                .join("");

            // 比较AND运算结果是否相同
            return network1 === network2 ? 0 : 2;
        }
    }
})();
