class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)
            return false;

        const hash1 = {};
        const hash2 = {};

        for (let i = 0; i < s.length; i++) {
            hash1[s[i]] = (hash1[s[i]] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++) {
            hash2[t[i]] = (hash2[t[i]] || 0) + 1;
        }

        for (let i in hash1) {
            if (hash1[i] !== hash2[i])
                return false;
        }

        return true;
    }
}
