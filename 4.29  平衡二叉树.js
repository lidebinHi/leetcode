// 给定一个二叉树，判断它是否是高度平衡的二叉树。本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {
    let isBalance = true
    const getDepth = (node) => {
        if(!node) return 0
        const left = getDepth(node.left)
        const right = getDepth(node.right)
        if(Math.abs(left - right) > 1) {
            isBalance = false
        }
        return Math.max(left, right) + 1
    }
    getDepth(node)
    return isBalance
};