class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';

        for (let i = 0; i < strs.length; i++) {
            str += `${strs[i].length}#${strs[i]}`;
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = [];
        let len = parseInt(str.slice(0, str.indexOf('#')));
        let _str = '';

        for (let i = str.indexOf('#'); i < str.length; i++) {
            if (!(str[i - 1] == len % 10 && str[i] === '#')) {
                _str += str[i];
                len--;
            }

            if (len === 0) {
                arr.push(_str);
                _str = "";
                len = '';
                i++;

                while (str[i + 1] !== '#' && i < str.length)
                    len += str[i++];
                
                if (str[i] !== '#')
                    len += str[i];
                
                len = parseInt(len);
                continue;
            }
        }

        return arr;
    }
}
