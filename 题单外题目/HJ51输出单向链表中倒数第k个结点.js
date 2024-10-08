// 由数组构建链表的方法

// 类定义法
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
// 构造函数定义法
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToLinkedList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}