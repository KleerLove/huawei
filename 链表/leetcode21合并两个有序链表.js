/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let result = new ListNode(0);
    let cur = result;
    while(list1 || list2){
        const first = list1 ? list1.val : Infinity;
        const second = list2 ? list2.val : Infinity;
        if(first < second){
            cur.next = new ListNode(first);
            cur = cur.next;
            list1 = list1.next;
        }else{
            cur.next = new ListNode(second);
            cur = cur.next;
            list2 = list2.next;
        }
    }
    return result.next;
};