class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let found = true;

        if (s.length !== t.length)
            return !found;

        let hash1 = new Map();
        let hash2 = new Map();

        for (let i = 0; i < s.length; i++) {
            hash1.set(s[i], hash1.get(s[i]) + 1 || 1);
        }

        for (let i = 0; i < t.length; i++) {
            hash2.set(t[i], hash2.get(t[i]) + 1 || 1);
        }

        hash1.forEach((a,b) => {
            if (a !== hash2.get(b))
                found = false;
        })

        return found;
    }
}
