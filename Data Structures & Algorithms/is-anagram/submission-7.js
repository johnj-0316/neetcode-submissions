class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)
            return false;

        let dict1 = {};
        let dict2 = {};

        for (let c of s) {
            if (dict1[c])
                dict1[c]++;
            else
                dict1[c] = 1;
        }

        for (let c of t) {
            if (dict2[c])
                dict2[c]++;
            else
                dict2[c] = 1;
        }

        for (let c of s) {
            if (dict1[c] !== dict2[c])
                return false;
        }

        return true;
    }
}
