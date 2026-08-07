class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const possibilities = nums.filter(num => num <= target);

        if (!possibilities.length) return [];

        const sub = [];
        const sol = [];

        this.dfs(possibilities, 0, sub, 0, sol, target)
        return sol;
    }

    dfs(nums, i, sub, subSum, sol, target) {
        if (i >= nums.length || subSum > target) {
            if (subSum === target) {
                sol.push([...sub]);
            }

            return;
        }

        sub.push(nums[i]);
        let newSum = subSum + nums[i];
        this.dfs(nums, i, sub, newSum, sol, target);
        sub.pop();
        newSum -= nums[i];
        this.dfs(nums, i + 1, sub, newSum, sol, target);
    }
}
