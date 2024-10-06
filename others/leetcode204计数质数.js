// 循环判断该数是否是质数

var countPrimes = function (n) {
    let count = 0;
    while (n > 0) {
        if (isPrimeNumber(--n)) count++;
    }
    return count;
};

function isPrimeNumber(num) {
    // 小于 2 的数不是质数
    if (num < 2) {
        return false;
    }
    // 2 和 3 是质数
    if (num === 2 || num === 3) {
        return true;
    }
    // 能被 2 或 3 整除的数不是质数
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    // 从 5 开始，以 6 为步长进行循环判断
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}