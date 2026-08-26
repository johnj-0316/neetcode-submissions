class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const m = new Map();
        const dfs = (i) => {
            if (i < 0)
                return 0;
                
            if (i === 0)
                return 1;
                
            if (m.get(i))
                return m.get(i);
                
            m.set(i, dfs(i - 1) + dfs(i - 2));
            return m.get(i);
        };
        
        return dfs(n);
    }
}
