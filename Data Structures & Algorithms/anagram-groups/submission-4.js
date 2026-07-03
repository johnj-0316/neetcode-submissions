class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {};

        for (let str of strs) {
            let chrs = Array(26).fill(0);
            
            for (let i = 0; i < str.length; i++) {
                chrs[str.charCodeAt(i) - 97]++;
            }
            
            let joined = chrs.join(",");

            if (group[joined])
                group[joined].push(str)
            else
                group[joined] = [str];
        }

        return Object.values(group)
    }
}
