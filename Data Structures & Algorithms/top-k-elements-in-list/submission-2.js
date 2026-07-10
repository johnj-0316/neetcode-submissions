class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = Array.from({length: nums.length + 1}, () => []);
        let freq = {};

        for (let i of nums) {
            freq[i] = (freq[i] || 0) + 1;
        }

        for (let i in freq) {
            count[freq[i]].push(i);
        }

        let req = [];

        for (let i = count.length - 1; i >= 0; i--) {
            for (let j in count[i]) {
                req.push (count[i][j]);

                if (req.length === k)
                    return req;
            }
        }

        return []
    }
}
