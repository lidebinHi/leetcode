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
// 递归法
// 要想知道二叉树的最大深度 那么就要知道 左右子树的最大深度 再加上根节点即可
// 同样的要想知道左右子树的最大深度也可以采用同样的方法
const maxDepth = (root) =>  {
if(!root?.left && !root?.right) return 0
let maxPath = 0
const left = maxDepth(root.left)
const right = maxDepth(root.right)
maxPath = left + right > maxPath ? left + right : maxPath
return left > right ? left + 1 : right + 1
};

const diameterOfBinaryTree = (root) => {
    return maxDepth(root)
};