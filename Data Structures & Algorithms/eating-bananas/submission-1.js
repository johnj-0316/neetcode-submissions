class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1;
        let max = Math.max.apply(null, piles);

        while (min <= max) {
            let mid = Math.floor(min + (max - min) / 2);
            let time = 0;

            for (let i = 0; i < piles.length; i++) {
                time += Math.ceil(piles[i] / mid)
            }

            if (time > h) {
                min = mid + 1;
            }
            else {
                let j = mid - 1;
                time = 0;

                for (let i = 0; i < piles.length; i++) {
                    time += Math.ceil(piles[i] / j)
                }
                console.log(mid, time)
                if (time > h) {
                    return mid;
                }
                else {
                    max = mid - 1;
                }
            }
        }

        return max;
    }
}
