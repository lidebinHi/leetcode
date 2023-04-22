// 给你两个单链表的头节点 headA 和 headB ，
// 请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

// 解法一 让长的链表先走多出的节点 再两个链表一起走 这样两个指针就会同步 如果有相交链表 就会相等
const getIntersectionNode = (headA, headB) => {
    if(!headA || !headB) return null
    let lenA = 0
    let lenB = 0
    let pA = headA
    let pB = headB
   while (pA) {
        lenA ++
        pA = pA.next
   }
    while (pB) {
        lenB ++
        pB = pB.next
    }
    if(lenA > lenB){
        for (let i = 0; i < lenA - lenB ; i++) {
            headA = headA.next
        }
    } else if(lenA < lenB) {
        for (let i = 0; i < lenB - lenA ; i++) {
            headB = headB.next
        }
    }
    while (headA && headB){
        if(headA === headB){
            return headA
        }
        headA = headA.next;
        headB = headB.next
    }
    return null
};


// 解法2 遍历过程中存入map 在进行判断
const getIntersectionNode2 = function (headA, headB) {
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