class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    //4, 5, 6, 7, 8, 1, 2, 3
    search(nums, target) {
        let left = 0;
        let right = nums.length;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            let pivot = nums[left];
            console.log(mid, pivot)

            if (nums[mid] === target) {
                return mid;
            }

            if (pivot === target) {
                return left;
            }

            if (nums[mid] < pivot) {
                if (target < nums[mid] && target < pivot) {
                    right = mid - 1;
                }
                else if (target > nums[mid] && target < pivot) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            else if (nums[mid] > pivot) {
                if (target > nums[mid] && target > pivot) {
                    left = mid + 1;
                }
                else if (target < nums[mid] && target > pivot) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            else {
                left = mid + 1;
            }
        }

        return -1;
    }
}
