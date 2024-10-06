/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    const len = hand.length;
    if (len % groupSize !== 0) return false;
    hand.sort((a, b) => a - b);
    // 外层遍历找顺子起点，内层遍历找顺子后续元素
    for (let i = 0; i < len; i++) {
        if (hand[i] === -1) continue;
        let count = 1; // 组里已经有的元素
        for (let j = i + 1; j < len && count < groupSize; j++) {
            if (hand[j] - hand[i] === count) {
                count++;
                hand[j] = -1; // 标记已经用过的元素
            }
        }
        if (count !== groupSize) return false;
    }
    return true;
};