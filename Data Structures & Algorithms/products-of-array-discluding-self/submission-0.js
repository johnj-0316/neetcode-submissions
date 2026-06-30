class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // [72,48,36,24]
    // [2,3,4,6]
    // [72,24,6,1]

    // [0,-6,0,0,0]
    // [-1,0,1,2,3]
    productExceptSelf(nums) {
        let newNums = Array(nums.length).fill(1);
        let consecutiveProduct = 1;

        for (let i = nums.length - 2; i >= 0; i--) {
            consecutiveProduct *= nums[i + 1];
            newNums[i] *= consecutiveProduct;
        }

        consecutiveProduct = 1;

        for (let i = 1; i < nums.length; i++) {
            consecutiveProduct *= nums[i - 1];
            newNums[i] *= consecutiveProduct;
        }

        return newNums
    }
}
