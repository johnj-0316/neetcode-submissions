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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const max = [0]
        this.dfs(root, max)
        return max[0]
    }

    dfs(root, max) {
        if (!root) {
            return 0;
        }

        let left = this.dfs(root.left, max);
        let right = this.dfs(root.right, max);
        max[0] = Math.max(max[0], left + right);
        return 1 + Math.max(left, right);
    }
}
