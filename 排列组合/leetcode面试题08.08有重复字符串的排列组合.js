//跳过重复的排列组合。可以先对字符串进行排序，避免相同字符出现在同一层次的排列中

var permutation = function (S) {
    const results = [];
    const sortedStr = S.split('').sort(); // 先排序

    function backtrack(path, used) {
        if (path.length === sortedStr.length) {
            results.push(path.join(''));
            return;
        }

        for (let i = 0; i < sortedStr.length; i++) {
            // 避免在同一层次产生重复排列
            if (used[i] || (i > 0 && sortedStr[i] === sortedStr[i - 1] && !used[i - 1])) {
                continue;
            }
            used[i] = true;
            path.push(sortedStr[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(sortedStr.length).fill(false));
    return results;
};