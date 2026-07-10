class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {};

        for (let i = 0; i < strs.length; i++) {
            let arr = new Array(26).fill(0);

            for (let j of strs[i])
                arr[j.charCodeAt(0) - 'a'.charCodeAt(0)]++;

            arr = arr.join(',');

            if (!group[arr])
                group[arr] = [];

            group[arr].push(strs[i])
        }

        return Object.values(group);
    }
}
