class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let out = new Array(temperatures.length).fill(0);
        let max = temperatures.length - 1;

        for (let i = temperatures.length - 2; i >= 0; i--) {
            let count = i;

            if (temperatures[i] >= temperatures[max]) {
                while (i < max) {
                    temperatures.pop();
                    max--;
                }

                max = i;
                continue;
            }

            while (temperatures[i] >= temperatures[count + 1])
                count++;

            out[i] = count - i + 1;
        }

        return out;
    }
}
