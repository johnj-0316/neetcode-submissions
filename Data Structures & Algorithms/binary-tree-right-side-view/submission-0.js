/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const nodes = []
        this.dfs(root, nodes, 1);
        return nodes;
    }

    dfs(root, nodes, level = 1) {
        if (!root) {
            return;
        }

        if (level > nodes.length)
            nodes.push(root.val)
        
        this.dfs(root.right, nodes, level + 1)
        this.dfs(root.left, nodes, level + 1)
    }
}
