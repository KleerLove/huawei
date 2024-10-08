// 二分图的最大匹配问题
// https://www.doubao.com/thread/w0d56818cff38145a

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const n = await readline();
    let arr = await readline();
    arr = arr.split(' ').map(Number);
    console.log(findMaxPairs(arr));

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function findMaxPairs(arr) {
        let n = arr.length;
        let evenNumbers = [];
        let oddNumbers = [];
        for (let i = 0; i < n; i++) {
            if (arr[i] % 2 === 0) {
                evenNumbers.push(i);
            } else {
                oddNumbers.push(i);
            }
        }
        let graph = Array.from({ length: evenNumbers.length }, () =>
            new Array(oddNumbers.length).fill(0)
        );
        for (let i = 0; i < evenNumbers.length; i++) {
            for (let j = 0; j < oddNumbers.length; j++) {
                if (isPrime(arr[evenNumbers[i]] + arr[oddNumbers[j]])) {
                    graph[i][j] = 1;
                }
            }
        }
        let visited = new Array(oddNumbers.length).fill(false);
        function dfs(u) {
            for (let v = 0; v < oddNumbers.length; v++) {
                if (graph[u][v] && !visited[v]) {
                    visited[v] = true;
                    if (matched[v] === -1 || dfs(matched[v])) {
                        matched[v] = u;
                        return true;
                    }
                }
            }
            return false;
        }
        let matched = new Array(oddNumbers.length).fill(-1);
        let count = 0;
        for (let u = 0; u < evenNumbers.length; u++) {
            visited.fill(false);
            if (dfs(u)) {
                count++;
            }
        }
        return count;
    }
})();
