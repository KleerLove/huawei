/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param intervals Interval类一维数组 
 * @return Interval类一维数组
 */
function merge( intervals ) {
    if(intervals.length <= 1 ) return intervals;

    intervals.sort((a, b) => a.start - b.start);
    const result = [];
    let arr = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const n = intervals[i];
        if (n.start <= arr.end) {
            arr.end = Math.max(arr.end, n.end);
        } else {
            result.push(arr);
            arr = n;
        }
    }
    result.push(arr);
    return result;
}
module.exports = {
    merge : merge
};