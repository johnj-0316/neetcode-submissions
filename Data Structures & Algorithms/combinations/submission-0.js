class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     * U-
     *  I: integer
     *  O: integer
     *  E/C: k = 1, n = 1, return [[1]];
     * 
     * P:
     *  
     */
    combine(n, k) {
        const sub = [];
        const res = [];

        const dfs = (i, sub) => {
            if (sub.length === k) {
                res.push([...sub]);
                return;
            }

            if (i > n) {
                return;
            }

            sub.push(i);
            dfs(i + 1, sub);
            sub.pop();
            dfs(i + 1, sub);
        }

        dfs(1, sub);
        return res;
    }
}
