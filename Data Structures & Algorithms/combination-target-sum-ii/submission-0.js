class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const sub = [];
        const sol = [];
        this.dfs(candidates, target, 0, 0, sub, sol);
        return sol;
    }

    dfs(candidates, target, i, subSum, sub, sol) {
        if (subSum === target) {
            sol.push([...sub]);
            return;
        }

        if (i >= candidates.length || subSum > target) {
            return;
        }

        sub.push(candidates[i]);
        subSum += candidates[i];
        this.dfs(candidates, target, i + 1, subSum, sub, sol);
        sub.pop();
        subSum -= candidates[i];

        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
            i++;
        }

        this.dfs(candidates, target, i + 1, subSum, sub, sol);
    }
}
