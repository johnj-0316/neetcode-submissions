class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const sub = [];
        const sol = [];

        this.dfs(nums, 0, sub, sol);
        return sol;
    }

    dfs(nums, i, sub, sol) {
        if (i >= nums.length) {
            sol.push([...sub]);
            return;
        }

        sub.push(nums[i]);
        this.dfs(nums, i + 1, sub, sol);
        sub.pop();
        
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }

        this.dfs(nums, i + 1, sub, sol);
    }
}
