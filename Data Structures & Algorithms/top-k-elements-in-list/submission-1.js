class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const freq = Array.from({length: nums.length + 1}, () => []);

        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1;
        }

        for (let i in count) {
            freq[count[i]].push(JSON.parse(i));
        }

        const req = [];

        for (let i = freq.length - 1; i > 0; i--) {
            for (let j = 0; j < freq[i].length; j++) {
                req.push(freq[i][j]);

                if (req.length === k)
                    return req;
            }
        }
    }
}
