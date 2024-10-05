/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    const len = nums.length;
    if(len <= 1) return len;
    let left = 0;
    let result = 0;
    for(let i = 1; i < len; i++){
        if(nums[i] <= nums[i - 1]){
            result = Math.max(result, i - left);
            left = i;
        }
        if(i === len - 1) result = Math.max(result, i - left + 1);
    }
    return result;
};