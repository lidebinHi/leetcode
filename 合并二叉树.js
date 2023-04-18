/**
 * 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。
 * 合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
 * 返回合并后的二叉树。
 * 注意: 合并过程必须从两个树的根节点开始。
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function (root1, root2) {
    let p, head = new TreeNode();
    const queue1 = [];
    const queue2 = [];
    queue1.push(root1);
    queue2.push(root2);
    while (queue1.length && queue2.length) {
        const p1 = queue1.shift();
        const p2 = queue2.shift();
        if (p1.left && p2.left) {
            p1.left.val = p1.left.val + p2.left.val;
        } else {
            p1.left = p1 || p2 ? new TreeNode(p1?.left.val + p2?.left.val) : null;
        }
        if (p1.right && p1.right) {
            p1.right.val = p1.right.val + p2.right.val;
        } else {
            p1.right = p1 || p2 ? new TreeNode(p1?.right.val + p2?.right.val) : null;
        }
        queue1.push(p1.left);
        queue1.push(p1.right);
        queue2.push(p2.left);
        queue2.push(p2.right);
    }
    while (queue1.length) {
        const p1 = queue1.shift();
        queue1.push(p1.left);
        queue1.push(p1.right);
        p.next = new TreeNode(p1.val);
    }
    while (queue2.length) {
        const p2 = queue2.shift();
        queue2.push(p2.left);
        queue2.push(p2.right);
        p.next = new TreeNode(p2.val);
    }
    return head.left;

};