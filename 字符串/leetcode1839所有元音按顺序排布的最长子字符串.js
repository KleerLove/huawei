/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    let result = 0;
    let stack = [];
    for(let i = 0; i < word.length; i++){
        const n = word[i];
        const len = stack.length;
        if(i === 340){
            console.log();
        }
        switch(n){
            case 'a':
                if(len === 0 || stack[len - 1] === 'a'){
                    stack.push(n);
                } else {
                    stack = ['a'];
                }
                break;
            case 'e':
                if(stack[len - 1] === 'a' || stack[len - 1] === 'e'){
                    stack.push(n);
                } else {
                    stack = [];
                }
                break;
            case 'i':
                if(stack[len - 1] === 'e' || stack[len - 1] === 'i'){
                    stack.push(n);
                } else {
                    stack = [];
                }
                break;
            case 'o':
                if(stack[len - 1] === 'i' || stack[len - 1] === 'o'){
                    stack.push(n);
                } else {
                    stack = [];
                }
                break;
            case 'u':
                if(stack[len - 1] === 'o' || stack[len - 1] === 'u'){
                    stack.push(n);
                    if(word[i + 1] !== 'u'){
                        result = Math.max(result, stack.length);
                        stack = [];
                    }
                } else {
                    stack = [];
                }
                break;
        }
    }
    return result;
};

/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    let result = 0;
    let length = 0;
    let count = 0; // 用来记录符合要求的元音字母种类数量

    for(let i = 0; i < word.length; i++) {
        if (i > 0 && word[i] < word[i - 1]) { 
            // 如果当前字符不符合字典序，重置长度和元音字母计数
            length = 0;
            count = 0;
        }
        length++;  // 计算当前子字符串长度
        if (i === 0 || word[i] !== word[i - 1]) {
            count++;  // 遇到新的元音，增加计数
        }

        // 当所有5个元音字母都出现时更新最大长度
        if (count === 5) {
            result = Math.max(result, length);
        }
    }
    
    return result;
};
