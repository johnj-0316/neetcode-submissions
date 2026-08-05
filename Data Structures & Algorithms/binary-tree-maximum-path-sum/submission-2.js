/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 * 
 *                         5
 *                  4              8
 *            11              13       4
 *        7        2                        1   
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        const max = [0];
        this.dfs(root, max);
        return max[0];
    }

    dfs(root, max) {
        if (!root) {
            return 0;
        }

        let left = this.dfs(root.left, max);
        let right = this.dfs(root.right, max);

        if (left + right + root.val < 0) {
            if (max[0] == 0) {
                max[0] = left + right + root.val;
            }

            if (max[0] < 0) {
                max[0] = Math.max(left + right + root.val, max)
            }

            return 0;
        } else {
            max[0] = Math.max(left + right + root.val, max)
            return Math.max(left, right) + root.val;
        }
    }
}
