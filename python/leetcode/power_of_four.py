class Solution(object):
    def isPowerOfFour(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n == 0:
            return False
        if n == 1:
            return True
        
        if n > 1 and n < 4:
            return False
        
        if n % 4 != 0:
            return False
        
        return self.isPowerOfFour(n // 4)
        
        
input = 64
output = Solution().isPowerOfFour(input)
print(output)
            