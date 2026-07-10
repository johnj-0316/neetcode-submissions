class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let close = {
            '[': ']',
            '(': ')',
            '{': '}'
        }

        for (let i = 0; i < s.length; i++) {
            if (close[s[i]])
                stack.push(s[i]);
            else if (close[stack[stack.length - 1]] !== s[i])
                return false;
            else
                stack.pop();
        }

        return !stack.length;
    }
}
