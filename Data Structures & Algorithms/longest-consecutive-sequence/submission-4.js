class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let check = {};
        let max = 0;

        for (let i of nums) {
            check[i] = 1;
        }

        for (let i in check) {
            let len = 1;

            while (check[parseInt(i) + len])
                len++;

            max = Math.max(max, len)
        }

        return max;
    }
}
