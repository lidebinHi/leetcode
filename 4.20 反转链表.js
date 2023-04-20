// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// const ListNode = require('./model/ListNode')

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const reverseList = (head) => {
    if(!head?.next) return head
    const newHead = new ListNode();
    let p = newHead.next
    while(head) {
        newHead.next = head;
        head = head.next;
        newHead.next.next = p;
        p = newHead.next;
    }
    return p
};