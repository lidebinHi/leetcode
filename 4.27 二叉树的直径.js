// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
// 计算直径就是左右子树的最大深度之和

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
* @param {TreeNode} root
* @return {number}
*/
// 需要针对每一个节点的左子树的最大深度与右子树的最大深度来和来做比较
const diameterOfBinaryTree = function(root) {
    let max = 0
    const getDepth = (root) => {
        if (!root) {
            return 0
        }
        const left = getDepth(root.left)
        const right = getDepth(root.right)
        max = Math.max(left + right, max)
        return Math.max(left, right) + 1
    }
    getDepth(root)
    return max
};