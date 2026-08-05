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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const [min, max] = p.val < q.val ? [p, q] : [q, p]

        if (!root) {
            return;
        }

        if (root.val >= min.val && root.val <= max.val) {
            return root;
        }
        else if (root.val > min.val && root.val > max.val) {
            return this.lowestCommonAncestor(root.left, p, q)
        }
        else {
            return this.lowestCommonAncestor(root.right, p, q)
        }
    }
}
