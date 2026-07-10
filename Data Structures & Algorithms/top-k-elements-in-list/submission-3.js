class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};
        let freqArr = Array.from({length: nums.length + 1}, () => []);

        for (let i of nums)
            freq[i] = (freq[i] || 0) + 1;

        for (let i in freq)
            freqArr[freq[i]].push(i);

        let req = [];

        for (let i = freqArr.length - 1; i > 0; i--) {
            for (let j = freqArr[i].length - 1; j >= 0; j--) {
                req.push(freqArr[i][j]);

                if (req.length === k)
                    return req;
            }
        }

        return req;
    }
}
