/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return bool布尔型
 */
function isValid( s ) {
    const stack = [];
    for(let i = 0; i < s.length; i++){
        const n = s[i];
        switch(n){
            case ')':
                if(stack.pop() !== '(') return false;
                break;
            case ']':
                if(stack.pop() !== '[') return false;
                break;
            case '}':
                if(stack.pop() !== '{') return false;
                break;
            default:
                stack.push(n);
        }
    }
    return stack.length === 0 ? true : false;
}
module.exports = {
    isValid : isValid
};