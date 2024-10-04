//
void async function () {
    let n = await readline();
    n = parseInt(n);
    const matrices = [];

    // 读取矩阵维度
    for (let i = 0; i < n; i++) {
        let line = await readline();
        let [rows, cols] = line.split(' ').map(Number);
        matrices.push({ rows, cols });
    }

    const formula = await readline();

    // 递归函数用于解析表达式
    function parseExpression(expression, index) {
        // 解析第一个项
        let [nextIndex, result] = parseTerm(expression, index);

        // 解析并乘后续的项
        while (nextIndex < expression.length && expression[nextIndex] !== ')') {
            let [newIndex, nextResult] = parseTerm(expression, nextIndex);
            if (result.cols !== nextResult.rows) {
                throw new Error('维度不兼容');
            }
            const cost = result.cost + nextResult.cost + result.rows * result.cols * nextResult.cols;
            result = { rows: result.rows, cols: nextResult.cols, cost };
            nextIndex = newIndex;
        }
        return [nextIndex, result];
    }

    // 递归函数用于解析项（矩阵或括号中的表达式）
    function parseTerm(expression, index) {
        if (expression[index] === '(') {
            // 解析括号内的表达式
            let [nextIndex, result] = parseExpression(expression, index + 1);
            return [nextIndex + 1, result]; // 跳过右括号
        } else if (/[A-Z]/.test(expression[index])) {
            // 获取矩阵维度
            const idx = expression.charCodeAt(index) - 'A'.charCodeAt(0);
            const matrix = matrices[idx];
            return [index + 1, { rows: matrix.rows, cols: matrix.cols, cost: 0 }];
        }
    }

    const [finalIndex, result] = parseExpression(formula, 0);
    console.log(result.cost);
}();



//
//
//
// 栈, 用 ) 来判断是否要计算
// 'ABC'.charCodeAt(0) === 65


void async function () {
    let n = await readline();
    n = parseInt(n);
    // 1. 创建二维数组 arr 保存输入矩阵
    const arr = []
    for (let i = 0; i < n; i++) {
        let a = await readline();
        arr[i] = a.trim().split(' ').map(Number)
    }
    // 2. 获取计算法则 method 字符串
    const method = await readline()

    let result = [], count = 0 // result 模拟栈结构，保存待计算的数据
    // 3. 遍历计算法则字符串
    for (let i = 0; i < method.length; i++) {
        if (method[i] === ')') { // 3.3 当遇到后括号的时候，出栈计算并将结果重新入栈
            const second = result.pop()
            const first = result.pop()
            count += first[0] * first[1] * second[1]
            result.push([first[0], second[1]])
        } else if(method[i] >= 'A' && method[i] <= 'Z') { // 遇到非括号，进行入栈操作
            // 通过字母的 ascii 值判断对应矩阵的顺序
            result.push(arr[method.charCodeAt(i) - 65])
        }
    }
    console.log(count)
}()
