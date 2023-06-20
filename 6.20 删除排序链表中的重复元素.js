// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**w d
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
    if(!head?.next) return head
    let p1 = head
    let p2 = head.next
    while(p2) {
        if(p2.val !== p1.val){
            if(p1.next !== p2) {
                p1.next = p2
            }
            p1 = p2
            p2 = p2.next
        } else {
            if(!p2.next) {
                p1.next = null
                return head
            }
            p2 = p2.next
        }
    }
    return head
};