// 分行打印数组元素技巧 path.join("\n")

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = await readline();
    const [rows, cols] = line.split(" ").map(Number);

    // 读取迷宫
    let maze = [];
    for (let i = 0; i < rows; i++) {
        line = await readline();
        maze.push(line.split(" ").map(Number));
    }

    // 四个方向：上、下、左、右
    const directions = [
        [-1, 0], // 上
        [1, 0],  // 下
        [0, -1], // 左
        [0, 1]   // 右
    ];

    // BFS 队列，每个元素包含当前坐标及路径
    let queue = [[0, 0, []]]; // 初始化为 (0,0) 并记录初始路径为空
    maze[0][0] = 2; // 将起点标记为访问过（避免额外的path数组）

    while (queue.length > 0) {
        let [x, y, path] = queue.shift();
        path.push(`(${x},${y})`);

        // 如果到达终点，输出路径并结束
        if (x === rows - 1 && y === cols - 1) {
            console.log(path.join("\n"));
            break;
        }

        // 遍历四个方向
        for (let [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;

            // 判断是否在边界内，且未访问过且是通路
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && maze[nx][ny] === 0) {
                queue.push([nx, ny, path.slice()]); // 复制当前路径并继续
                maze[nx][ny] = 2; // 标记为已访问
            }
        }
    }
}();
