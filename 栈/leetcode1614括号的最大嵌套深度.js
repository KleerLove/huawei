/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    const stack = [];
    let maxDeepth = 0;
    for(const n of s){
        switch(n){
            case '(':
                stack.push(n);
                maxDeepth = Math.max(maxDeepth, stack.length);
                break;
            case ')':
                stack.pop();
                break;
            default:
                break;
        }
    }
    return maxDeepth;
};