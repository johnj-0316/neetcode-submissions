class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     * u:
     *  I: int
     *  O: str[]
     * 
     * p:
     *  for every (, put in )
     *  keep track of # of (, 
     *  (, n = 1,
     * 
     *  ((, n = 2
     *  (), n = 1
     * 
     *  ((), n = 2
     */
    generateParenthesis(m) {
        const dfs = (n, str, sol) => {
            if (str.length === m * 2) {
                sol.push(str);
                return;
            }

            if (n < m)
                dfs(n + 1, str + "(", sol);

            if (str.length < n * 2)
                dfs(n, str + ")", sol);
        }

        const sol = [];
        dfs(0, "", sol);
        return sol;
    }
}
