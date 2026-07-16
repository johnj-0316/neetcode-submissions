class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let pivot = nums[0];
        let min = pivot;
        let left = 1;
        let right = nums.length;

        while (left <= right && nums[left] != null) {
            let mid = Math.floor(left + (right - left) / 2);

            if (nums[mid] > pivot) {
                left = mid + 1;
            }
            else {
                min = Math.min(nums[mid], min);
                right = mid - 1;
            }
        }

        return min;
    }
}
