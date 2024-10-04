// 正则 match
// command = 'A10'
// let match = command.match(/^([ADWS])(\d+)$/);
// => ["A10","A","10"]



const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let line = await readline();
    function calculateCoordinates(line) {
        let x = 0,
            y = 0; // 初始坐标 (0, 0)

        // 分割输入字符串，按照 ';' 作为分隔符
        let commands = line.split(";");

        // 遍历每个命令
        for (let command of commands) {
            // 使用正则表达式匹配合法的指令：字母 (A/D/W/S) + 任意位数字
            let match = command.match(/^([ADWS])(\d+)$/);
            if (match) {
                console.log(match);
                let direction = match[1];
                let value = parseInt(match[2], 10); // 解析数字部分

                // 根据方向更新坐标
                switch (direction) {
                    case "A": // 向左移动
                        x -= value;
                        break;
                    case "D": // 向右移动
                        x += value;
                        break;
                    case "W": // 向上移动
                        y += value;
                        break;
                    case "S": // 向下移动
                        y -= value;
                        break;
                }
            }
        }

        // 输出结果坐标
        return(`${x},${y}`);
    }
    console.log(calculateCoordinates(line))
})();
