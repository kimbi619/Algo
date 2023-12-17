class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        
        string_numb = (str(x))
        list_string = list(string_numb)
        size = len(string_numb)

        if size >= 10 and int(list_string[0]) >= 4:
            return 0
        return ''.join(list_string[::-1])
        


sol = Solution().reverse(4294967295)
print(sol)
