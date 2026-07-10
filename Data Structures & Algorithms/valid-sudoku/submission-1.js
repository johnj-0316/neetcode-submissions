class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: 9}, () => new Set());
        let cols = Array.from({length: 9}, () => new Set());
        let sqrs = Array.from({length: 9}, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.')
                    continue;

                let sqr = 3 * Math.floor ( i / 3 ) + Math.floor ( j / 3 );

                if (rows[i].has(board[i][j]))
                    return false;

                if (cols[j].has(board[i][j]))
                    return false;

                if (sqrs[sqr].has(board[i][j]))
                    return false;

                rows[i].add(board[i][j]);
                cols[j].add(board[i][j]);
                sqrs[sqr].add(board[i][j])
            }
        }

        return true;
    }
}
