/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 */

function ListNode(val, next) {
    this.val = val || 0;
    this.next = next || null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    const map = new Map();
    let pa = headA;
    let pb = headB;
    while (pa) {
        map.set(pa, pa);
        pa = pa.next;
    }
    while (pb) {
        if (map.has(pb)) {
            return pb;
        }
        pb = pb.next;
    }

    return null;
};