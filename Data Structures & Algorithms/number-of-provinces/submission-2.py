from collections import deque

class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        num = len(isConnected)
        q = deque([])
        q_num = 0
        visited = set()

        for i in range(num):
            if i not in visited:
                q_num += 1

            else:
                continue
            
            visited.add(i)
            q.append(i)
            print(i)

            while q:
                province = isConnected[q.popleft()]

                for j, exists in enumerate(province):
                    if exists and j not in visited:
                        q.append(j)
                        visited.add(j)

        return q_num



            
        