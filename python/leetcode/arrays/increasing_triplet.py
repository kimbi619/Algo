class Solution(object):
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """

        small = float('inf')
        second_small = float('inf')
        
        for num in nums:

            if num <= small:
                small = num

            elif num <= second_small:
                second_small = num

            else:
                return True
        
        return False
    

input = [1, 2, 3, 4, 5]
input2 = [5, 4, 3, 2, 1]
input3 = [2,1,5,5,4,6]
output = Solution().increasingTriplet(input3)
print('result: ', output)