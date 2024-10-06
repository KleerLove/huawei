/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const len1 = grid.length;
    const len2 = grid[0].length;
    let time = 0; // 时间
    let freshCount = 0; // 新鲜橘子数
    let willRote = []; // 将要腐败的橘子
    let willRoteCount = Infinity; // 将要腐败的橘子数
    while (willRoteCount !== 0) {
        // 将上一轮标记要腐败的橘子变腐败
        for (const [m, n] of willRote) {
            grid[m][n] = 2;
        }
        // 重置将要腐败和新鲜的的橘子, 以开始新一轮统计
        willRote = [];
        freshCount = 0;
        for (let i = 0; i < len1; i++) {
            for (let j = 0; j < len2; j++) {
                if (grid[i][j] === 2) {
                    // 检查上下左右四个方向
                    if (i !== len1 - 1 && grid[i + 1][j] === 1) willRote.push([i + 1, j]);  // 下方
                    if (i !== 0 && grid[i - 1][j] === 1) willRote.push([i - 1, j]);        // 上方
                    if (j !== len2 - 1 && grid[i][j + 1] === 1) willRote.push([i, j + 1]);  // 右方
                    if (j !== 0 && grid[i][j - 1] === 1) willRote.push([i, j - 1]);        // 左方
                } else if (grid[i][j] === 1) {
                    freshCount++;
                }
            }
        }
        willRoteCount = willRote.length;
        if (willRoteCount !== 0) time++;
    }
    // 如果没有可以腐败的橘子, 并且所有的橘子均已经腐败, 则返回时间; 否则返回-1
    return freshCount === 0 ? time : -1;
};