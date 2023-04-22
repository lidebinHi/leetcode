// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const mergeTwoLists = (list1, list2) => {
    if(!list1 && !list2) return null
    const newHead = new ListNode();
        p = newHead
    let p1 = list1
        p2 = list2

    while(p1 && p2) {
            if(p1.val < p2.val) {
                p.next = p1
                p1 = p1.next
            } else if(p2.val < p1.val) {
                p.next = p2
                p2 = p2.next
            }else {
                p.next = p1
                p1 = p1.next
                p = p.next
                p.next = p2
                p2 = p2.next
            }
            p = p.next
    }
    if(p1) {
        p.next = p1
    }
    if(p2) {
        p.next = p2
    }
    return newHead.next
};
console.log(mergeTwoLists([1,2,4], [1,3,4]))