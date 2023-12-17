

class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        
        left = 0
        right = len(height) - 1
        max_area = 0
        
        while (right > left):
            area = abs(height[right] - height[left]) * (right - left) + 1
            
            if height[left] > height[right]:
                right -= 1
            elif height[right] > height[left]:
                left += 1
            else:
                left += 1
                right -= 1
                
            if area > max_area:
                max_area = area
            
            return max_area
        
        
input = [1,8,6,2,5,4,8,3,7]
output = Solution().maxArea(input)
print(output)
            