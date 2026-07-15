class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let max = 0;

        for (let right = 1; right < prices.length; right++) {
            let leftPrice = prices[left];
            let rightPrice = prices[right];

            if (rightPrice < leftPrice) {
                left = right;
            }
            else {
                max = Math.max(rightPrice - leftPrice, max);
            }
        }

        return max;
    }
}
