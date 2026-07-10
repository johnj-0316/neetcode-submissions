class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (let str of strs) {
            encoded += `#${str.length}&${str}`;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let strs = [];

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let len = "";
            let j = i;
 
            while (str[++j] !== "&") {
                len += str[j];
            } 
            console.log(char)

            let lenOfLen = len.length;
            len = +len;
            let word = str.slice(i + 2 + lenOfLen, i + 2 + lenOfLen + len);

            if (char === "#") {
                strs.push(word);
                i += 1 + lenOfLen + len;
            }
        }

        return strs;
    }
}
