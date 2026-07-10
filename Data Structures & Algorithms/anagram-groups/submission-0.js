class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};

        for (let i = 0; i < strs.length; i++) {
            let map = new Array(26).fill(0);

            for (let j of strs[i]) {
                map[j.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            map = map.join(',')

            if (groups[map])
                groups[map].push(strs[i]);
            else
                groups[map] = [strs[i]];
        }

        return Object.values(groups);
    }
}
