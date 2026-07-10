class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length: 9}, () => new Set());
        const col = Array.from({length: 9}, () => new Set());
        const sqr = Array.from({length: 9}, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.')
                    continue;

                let sq = 3 * Math.floor ( i / 3 ) + Math.floor ( j / 3 );

                if (sqr[sq].has(board[i][j]))
                    return false;

                if (col[j].has(board[i][j]))
                    return false;

                if (row[i].has(board[i][j]))
                    return false;

                row[i].add(board[i][j])
                col[j].add(board[i][j]);
                sqr[sq].add(board[i][j])
            }
        }

        return true;
    }
}
