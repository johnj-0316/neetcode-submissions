class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = {};
        let check = 0;
        let maxCheck = 0;
        let max = -Infinity;
        let min = Infinity;

        for (let i in nums) {
            if (nums[i] > max)
                max = nums[i];

            if (nums[i] < min)
                min = nums[i];

            count[nums[i]] = 1;
        }

        while (max >= min) {
            check++;

            if (!count[max])
                check = 0;

            max--;
            maxCheck = Math.max(check, maxCheck)
        }

        return maxCheck;
    }
}
