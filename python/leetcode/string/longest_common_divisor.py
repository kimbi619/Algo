

class Solution(object):
    def remove_substring(self, long_string, short_string):
        return long_string.replace(short_string, "")
    
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        
        small = min(str1, str2)
        big = max(str1, str2)
        
        if len(small) == 1:
            return ''
        
        if big.startswith(small):
            res = self.remove_substring(big, small)
            if res == '':
                return small
            half = small[:len(small)//2]
            return self.gcdOfStrings(big, half)
        # else:
            # return self.gcdOfStrings(big, small[:len(small)//2])
        
s1 = 'TAUXXTAUXXTAUXXTAUXXTAUXX'
s2 = 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'
output = Solution().gcdOfStrings(s1, s2)
print(output)