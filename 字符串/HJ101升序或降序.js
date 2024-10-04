const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    function quickSort(arr, order) {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (order === "0" ? arr[i] < pivot : arr[i] > pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...quickSort(left, order), pivot, ...quickSort(right, order)];
    }
    const len = await readline();
    let arr = await readline();
    arr = arr.split(" ").map(Number);
    const flag = await readline();
    console.log(quickSort(arr, flag).join(" "));
})();
