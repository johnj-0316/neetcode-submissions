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
     * @return {boolean}
     */
    /*
                0
            2        4
        1         3     -1
     5     1        6      8
    */
    isBalanced(root) {
        const h = [true, 0]
        this.dfs(root, h)
        return h[0]
    }
    
    dfs(root, h) {
        if (!root) {
            return [true, 0]
        }

        let left = this.dfs(root.left, h)[1];
        let right = this.dfs(root.right, h)[1];
        let balanced = Math.abs(left - right) <= 1;
        h[0] &&= balanced;
        h[1] = 1 + Math.max(left, right)
        return h
    }
}
