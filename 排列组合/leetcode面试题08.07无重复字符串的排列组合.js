//递归回溯算法

var permutation = function (S) {
    const results = [];

    function backtrack(path, used) {
        if (path.length === S.length) {
            results.push(path.join(''));
            return;
        }

        for (let i = 0; i < S.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(S[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(S.length).fill(false));
    return results;
};