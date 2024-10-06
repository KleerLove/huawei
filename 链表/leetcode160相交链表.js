// 方法一: 双循环，固定一个遍历另一个
var getIntersectionNode = function(headA, headB) {
    while(headA){
        let cur = headB;
        while(cur){
            if(cur === headA) return cur;
            cur = cur.next;
        }
        headA = headA.next;
    }
    return null;
};


// 方法二:
// 先求链表长度, 让较长的链表头节点移动两链表长度差值(让两个链表站在同一起跑线)
// 然后再同时向后, 直到两链表指向同一结点(当同时指向null时, 说明不相交)
var getIntersectionNode = function(headA, headB) {
    const lenA = getLength(headA);
    const lenB = getLength(headB);

    if(lenA > lenB){
        let path = lenA - lenB;
        while(path > 0){
            headA = headA.next;
            path--;
        }
    }else if(lenA < lenB){
        let path = lenB - lenA;
        while(path > 0){
            headB = headB.next;
            path--;
        }
    }

    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

function getLength(head){
    let len = 0;
    while(head){
        len++;
        head = head.next;
    }
    return len;
}