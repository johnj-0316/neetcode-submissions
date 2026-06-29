class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // [-5, -4, -2, -1, 0, 1, 2, 3, 7, 8]
    threeSum(nums) {
        nums = nums.toSorted((a, b) => a - b);
        let sums = [];
        let seen = new Set();

        if (nums[nums.length - 1] < 0) {
            return nums;
        }

        for (let i = 0; i < nums.length - 1; i++) {
            let num = nums[i];

            if (num > 0) {
                return sums;
            }

            let oppositeNum = num * -1;

            if (seen.has(oppositeNum)) {
                continue;
            }
            else {
                seen.add(oppositeNum);
            }

            let left = i + 1;
            let right = nums.length - 1;
            let prevLeft;
            let prevRight;

            while (left < right) {
                if (nums[left] + nums[right] === oppositeNum) {
                    if (nums[left] === prevLeft && nums[right] === prevRight) {
                        left++;
                        right--;
                        continue;
                    }
                    
                    prevLeft = nums[left];
                    prevRight = nums[right];
                    sums.push([num, nums[left], nums[right]])
                    left++;
                    right--;
                }
                //[-4,-1,-1,0,1,2]

                while (nums[left] + nums[right] > oppositeNum) {
                    right--;
                }

                while (nums[left] + nums[right] < oppositeNum) {
                    left++;
                }
            }
        }

        return sums;
    }
}
