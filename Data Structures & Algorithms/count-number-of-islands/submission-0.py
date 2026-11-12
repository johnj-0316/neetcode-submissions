class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or not grid[0]:
            return 0
        
        count = 0

        def dfs(r, c):
            if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]):
                return True

            if grid[r][c] == "0":
                return False

            dir = [
                (1,0),
                (0,1),
                (-1,0),
                (0,-1)
            ]

            for d in dir:
                x, y = d
                dfs(r + x, c + y)
                grid[r][c] = "0"

        for i, row in enumerate(grid):
            for j, col in enumerate(row):
                if grid[i][j] == "1":
                    dfs(i, j)
                    count += 1
        
        return count

