class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};

        for (let i = 0; i < nums.length; i++) {
            if (hash[target - nums[i]] !== void 0)
                return [hash[target - nums[i]], i];

            hash[nums[i]] = i;
        }

        return [];
    }
}
