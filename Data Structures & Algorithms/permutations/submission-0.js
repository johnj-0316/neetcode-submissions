class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const sub = [];
        const sol = [];
        const nums2 = new Array(nums.length).fill(0);
        this.dfs(nums, nums2, sub, sol);
        return sol;
    }

    dfs(nums, nums2, sub, sol) {
        if (sub.length === nums.length) {
            sol.push([...sub]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!nums2[i]) {
                sub.push(nums[i]);
                nums2[i]++;
                this.dfs(nums, nums2, sub, sol);
                sub.pop();
                nums2[i]--;
            }
        }
    }
}
