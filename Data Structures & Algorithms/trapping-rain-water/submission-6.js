class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let lMax = 0;
        let rMax = height.length - 1;
        let max = 0;

        while (left < right) {
            if (height[lMax] <= height[left]) {
                lMax = left;
            }

            if (height[rMax] <= height[right]) {
                rMax = right;
            }

            if (height[lMax] <= height[rMax]) {
                max += height[lMax] - height[left++];
            }
            else
                max += height[rMax] - height[right--];
        }

        return max;
    }
}
