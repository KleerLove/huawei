// map 会改变原数组

// padStart() 方法用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。
// 填充是从当前字符串的开头开始的。str.padStart(targetLength, padString)
// paddEnd 同理

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const line = await readline();
    const [n, m] = line.split(" ");
    const str = n + m;
    const oddArr = [];
    const evenArr = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 1) {
            oddArr.push(str[i]);
        } else {
            evenArr.push(str[i]);
        }
    }
    oddArr.sort();
    evenArr.sort();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 1) {
            arr.push(oddArr.shift());
        } else {
            arr.push(evenArr.shift());
        }
    }

    arr = convertHexArray(arr);
    console.log(arr.join(""));
    function convertHexArray(arr) {
        return arr.map((hexChar) => {
            // 判断是否为十六进制字符
            if (/^[0-9A-Fa-f]$/.test(hexChar)) {
                const decimalValue = parseInt(hexChar, 16);
                // 转换为4位的二进制字符串
                const binaryString = decimalValue.toString(2).padStart(4, '0');
                // 将二进制倒序
                const reversedBinaryString = binaryString.split("").reverse().join("");
                // 将倒序后的二进制转换为十进制数值
                const reversedDecimalValue = parseInt(reversedBinaryString, 2);
                // 转换为大写的十六进制字符并返回
                return reversedDecimalValue.toString(16).toUpperCase();
            } else {
                // 如果不是十六进制字符，直接返回原字符
                return hexChar;
            }
        });
    }

    // arr = hexToReversedBinaryHex(arr);
    // console.log(arr.join(""));
    // function hexToReversedBinaryHex(arr) {
    //     // 用来判断一个字符是否是十六进制字符
    //     const isValidHexChar = (char) => /^[0-9A-Fa-f]$/.test(char);

    //     // 将字符转换为二进制并倒序，再转换为十六进制大写字符
    //     const processHexChar = (char) => {
    //         // 将十六进制字符转换为十进制数字
    //         let decimalValue = parseInt(char, 16);
    //         // 转换为4位二进制并倒序
    //         let reversedBinary = decimalValue.toString(2).padStart(4, "0").split("").reverse().join("");
    //         // 将倒序后的二进制转换回十进制
    //         let reversedDecimal = parseInt(reversedBinary, 2);
    //         // 返回对应的十六进制大写字符
    //         return reversedDecimal.toString(16).toUpperCase();
    //     };

    //     return arr.map((char) => {
    //         // 如果是有效的十六进制字符则处理，否则原样返回
    //         return isValidHexChar(char) ? processHexChar(char) : char;
    //     });
    // }

    // let out = ""
    // arr.forEach((v,idx)=>{
    //     out = out + convertChar(v)
    // })
    // console.log(out)
    // function convertChar(char) {
    //     let hexTable = "0123456789abcdefABCDEF";
    //     if (hexTable.includes(char) != true) {
    //         return char;
    //     }
    //     let DEC = parseInt(char, 16); // 转为10进制
    //     let BIN = DEC.toString(2).padStart(4, "0").split("").reverse().join("");
    //     let tDEC = parseInt(BIN, 2);
    //     let HEX = tDEC.toString(16).toUpperCase();
    //     return HEX;
    // }
})();
