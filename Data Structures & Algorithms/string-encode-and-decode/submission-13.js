class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';

        for (let i of strs)
            str += `${i.length}#${i}`;

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];

        for (let i = 0; i < str.length; i++) {
            let j = '';

            while (str[i] !== '#')
                j += str[i++];

            strs.push(str.substring(++i, i + parseInt(j)));
            i += parseInt(j) - 1;
        }

        return strs;
    }
}
