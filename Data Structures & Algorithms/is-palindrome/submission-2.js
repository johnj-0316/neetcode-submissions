class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(s) {
        let code = s.charCodeAt(0) - 'a'.charCodeAt(0);

        if ((code >= 0 && code <= 25) || !isNaN(parseInt(s)))
            return true;

        return false;
    }
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        let l = s.toLowerCase();

        while (left < right) {
            while (!this.isAlphaNumeric(l[left]) && left < right)
                left++;

            while (!this.isAlphaNumeric(l[right]) && left < right)
                right--;

            if (l[left] !== l[right])
                return false;

            left++;
            right--;
        }

        return true;
    }
}
