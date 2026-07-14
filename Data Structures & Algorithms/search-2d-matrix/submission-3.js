class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i = 0;
        let j = matrix.length;
        
        while (i <= j) {
            let m = Math.floor(i + (j - i) / 2);

            if (!matrix[m]) {
                return false;
            }

            let leftmost = matrix[m][0];
            let rightmost = matrix[m][matrix[m].length - 1];

            if (leftmost <= target && rightmost >= target) {
                let left = 0;
                let right = matrix[m].length;

                while (left <= right) {
                    let mid = Math.floor(left + (right - left) / 2);

                    if (matrix[m][mid] === target) {
                        return true;
                    }
                    else if (matrix[m][mid] > target) {
                        right = mid - 1;
                    }
                    else {
                        left = mid + 1;
                    }
                }

                return false;
            }
            else if (leftmost >= target) {
                j = m - 1;
            }
            else {
                i = m + 1;
            }
        }

        return false;
    }
}
