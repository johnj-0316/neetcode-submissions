class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let left = 0;
        let right = 0;
        let set = new Set();
        // zxyzazbcybcdefg

        while (right < s.length) {
            let char = s[right];

            if (!set.has(char)) {
                set.add(char);
                maxLen = Math.max(maxLen, set.size);
            }
            else {
                maxLen = Math.max(maxLen, right - left);

                while(s[left] !== char) {
                    set.delete(s[left]);
                    left++;
                }

                left++;
            }

            right++;
        }

        return maxLen;
    }
}
