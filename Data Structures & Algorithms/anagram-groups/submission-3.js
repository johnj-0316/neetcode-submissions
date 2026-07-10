class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {};

        for (let i = 0; i < strs.length; i++) {
            let uniq = new Array(26).fill(0);

            for (let j of strs[i]) {
                uniq[j.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            uniq = uniq.join(',');

            if (!group[uniq])
                group[uniq] = [];

            group[uniq].push(strs[i]);
        }

        return Object.values(group);
    }
}
