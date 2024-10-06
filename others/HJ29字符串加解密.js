// 字符串可以用s[i]访问, 但是不能直接用s[i] = 修改
// 大写字母和小写字母的ASCII码相差32
// 使用 'a'.charCodeAt(0) 获取字符对应的ASCII码
// 使用 String.fromCharCode(ASCII码) 获取ASCII码对应的字符

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let n = await readline();
    let m = await readline();
    n = n.split("");
    m = m.split("");

    // 加密
    for (let i = 0; i < n.length; i++) {
        const t = n[i];
        if (t >= "a" && t <= "z") {
            if (t !== "z") {
                n[i] = String.fromCharCode(t.charCodeAt(0) + 1 - 32);
            } else {
                n[i] = "A";
            }
        } else if (t >= "A" && t <= "Z") {
            if (t !== "Z") {
                n[i] = String.fromCharCode(t.charCodeAt(0) + 1 + 32);
            } else {
                n[i] = "a";
            }
        } else if (t >= "0" && t <= "9") {
            if (t !== "9") {
                n[i] = Number(t) + 1;
            } else {
                n[i] = "0";
            }
        }
    }
    console.log(n.join(""));

    // 解密
    for (let i = 0; i < m.length; i++) {
        const t = m[i];
        if (t >= "A" && t <= "Z") {
            if (t !== "A") {
                m[i] = String.fromCharCode(t.charCodeAt(0) - 1 + 32);
            } else {
                m[i] = "z";
            }
        } else if (t >= "a" && t <= "z") {
            if (t !== "a") {
                m[i] = String.fromCharCode(t.charCodeAt(0) - 1 - 32);
            } else {
                m[i] = "Z";
            }
        } else if (t >= "0" && t <= "9") {
            if (t !== "0") {
                m[i] = Number(t) - 1;
            } else {
                m[i] = "9";
            }
        }
    }
    console.log(m.join(""));
})();
