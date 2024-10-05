const combine = (n, k) => {
    const res = [];

    const dfs = (start, path) => { // start是枚举选择的起点 path是当前构建的路径（组合）
        if (path.length === k) {
            res.push([...path]);       // 拷贝一份path，推入res
            return;                       // 结束当前递归
        }

        for (let i = start; i <= n; i++) { // 枚举出所有选择
            path.push(i);                    // 选择
            dfs(i + 1, path);             // 向下继续选择
            path.pop();                      // 撤销选择
        }
    };

    dfs(1, []); // 递归的入口，从数字1开始选
    return res;
}