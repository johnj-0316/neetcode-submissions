class MinStack {
    constructor() {
        this.stack = [];
        this.max = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.max.length < 1) {
            this.max.push(val);
        }
        else {
            if (this.max[this.max.length - 1] < val) {
                this.max.push(this.max[this.max.length - 1]);
            }
            else {
                this.max.push(val);
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.max.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.max[this.max.length - 1];
    }
}
