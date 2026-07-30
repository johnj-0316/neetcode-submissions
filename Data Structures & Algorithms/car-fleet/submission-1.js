class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const fleets = position.map((pos, ind) => [pos, speed[ind]])
        fleets.sort((a, b) => b[0] - a[0])
        const stack = []

        for (let i = 0; i < fleets.length; i++) {
            const [pos, speed] = fleets[i]
            const time = (target - pos) / speed;

            if (!stack.length || stack[stack.length - 1] < time) {
                stack.push(time)
            }
        }

        return stack.length
    }
}
