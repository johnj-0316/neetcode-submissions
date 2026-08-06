class PrefixTree {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr_level = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!curr_level[char])
                curr_level[char] = {};

            curr_level = curr_level[char];
        }

        curr_level["*"] = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr_level = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!curr_level[char])
                return false;

            curr_level = curr_level[char];
        }

        return !!curr_level["*"];
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr_level = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];

            if (!curr_level[char])
                return false;

            curr_level = curr_level[char];
        }

        return true;
    }
}
