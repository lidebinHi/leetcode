//  给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。 说明: 叶子节点是指没有子节点的节点。

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
    if(!root) return 0
    if(!root.left && !root.right) return  1
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    const maxHeight = left > right ? left : right
    return maxHeight + 1
};

// 层序遍历法
const maxDepth2 = (root) =>  {
    if(!root) return 0
    if(!root.left && !root.right) return  1
    const queue = [{...root, level: 1}]
    let p = null
    while(queue.length) {
        p = queue.shift()
        if(p.left) {
            queue.push({...p.left, level: p.level + 1})
        }

        if(p.right) {
            queue.push({...p.right, level: p.level + 1})
        }
    }
    return p.level
};