/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    let count = 0;
    // 遍历整张图, 寻找陆地
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                turnZero(i, j, grid);
            }
        }
    }
    return count;
}

// dfs递归, 把所有的相连的陆地变成海洋
function turnZero(i, j, grid) {
    // 超出矩阵边界或遇到 0, 直接返回
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return
    grid[i][j] = '0'
    turnZero(i, j + 1, grid)
    turnZero(i, j - 1, grid)
    turnZero(i + 1, j, grid)
    turnZero(i - 1, j, grid)
}