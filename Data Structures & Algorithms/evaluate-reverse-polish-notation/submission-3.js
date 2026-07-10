class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let pop;

        for (let i = 0; i < tokens.length; i++) {
            if (!stack.length) {
                stack.push(parseInt(tokens[i]));
                continue;
            }

            if (tokens[i] === '+') {
                pop = tokens[i][0] === '-' ? parseInt(tokens[i]) : stack.pop();
                stack[stack.length - 1] += pop;
                continue;
            }

            if (tokens[i] === '*') {
                pop = stack.pop();
                stack[stack.length - 1] *= pop;
                continue;
            }

            if (tokens[i] === '-') {
                pop = stack.pop();
                stack[stack.length - 1] -= pop;
                continue;
            }

            if (tokens[i] === '/') {
                pop = stack.pop();
                stack[stack.length - 1] = stack[stack.length - 1] / pop;
                stack[stack.length - 1] = stack[stack.length - 1] < 0 ? Math.ceil (stack[stack.length - 1]) : Math.floor (stack[stack.length - 1]);
                continue;
            }

            stack.push(parseInt(tokens[i]));
        }

        return stack[0];
    }
}
