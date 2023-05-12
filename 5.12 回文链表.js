//  给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
    if(!head) return false
    const arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    for(let i = 0; i < Math.ceil(arr.length / 2); i ++) {
        const last = arr.length - i - 1
        if(last <= i) break
        if(arr[i] !== arr[last]) return false
    }

    return true
};

