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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const res = [k]
        const element = [root.val]
        this.dfs(root, res, element)
        return element[0];
    }

    dfs(root, res, element) {
        if (!root) {
            return;
        }

        this.dfs(root.left, res, element)

        res[0]--;
        
        if (res[0] === 0 && root) {
            element[0] = root.val;
            res[0] = Infinity;
            return;
        }

        this.dfs(root.right, res, element)
    }
}
