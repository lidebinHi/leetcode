// 给你一个二叉树的根节点 root ， 检查它是否轴对称。


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// 如果对称 那也就是说 每个节点 他的左子树 要等于他的右子树
const isSymmetric = (root) => {
    if(!root) return true
    if(!root.left && !root.right) return true
    if(!root.left || !root.right) return false
    const queue = [root.left, root.right]
    while(queue.length) {
        const left = queue.shift()
        const right = queue.shift()
        if(!left && !right) continue
        if(!left || !right) return false
        if(left.val !== right.val) return false
        // 左节点的左节点入队
        queue.push(left.left)
        // 右节点的右节点入队
        queue.push(right.right)
        // 左节点的右节点入队
        queue.push(left.right)
        // 右节点的左节点入队
        queue.push(right.left)
    
    }
    return true    
};

// 层序遍历 判断每一层是否
const isSymmetric2 = (root) => {
    if(!root) return true

    const queue = [{...root, level: 1}]
    const hash = {
        1: [root.val]
    }
    let symmetric = true
    while(queue.length) {
        const node = queue.shift()
        if(node.emptyNode) continue
        hash[node.level + 1] = hash[node.level + 1] || []
        queue.push({...(node.left || { emptyNode: true }), level: node.level + 1})
        hash[node.level + 1].push(node.left?.val)
        queue.push({...(node.right || { emptyNode: true }), level: node.level + 1})
        hash[node.level + 1].push(node.right?.val)
    }
    const values = Object.values(hash)
    for(let q = 0; q < values.length; q++) {
        const value = values[q]
        let i = 0
            j = value.length - 1
        while (i < j) {
            if(value[i] !== value[j]) {
                symmetric = false
                return symmetric
            }
            i++
            j--
        }
    }
    return symmetric
};