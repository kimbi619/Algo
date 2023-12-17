
"""
Example:
Consider the following array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Expected Result:
The maximum subarray sum for this array is 6.

Explanation:
To find the contiguous subarray with the largest sum, we need to consider all possible subarrays and determine their sums. 
In this example, the subarray with the largest sum is [4, -1, 2, 1], and the sum of this subarray is 6.
"""


class Solution: 
    def maxSubArray(self, arr):
        max_sum = arr[0]
        current_sum = arr[0]
                
        for i in range(1, len(arr)):
            current_sum = max(arr[i], current_sum + arr[i])
            max_sum = max(max_sum, current_sum)
        return max_sum

input = [12, 1, -3, 4, -1, 2, 1, -5, 4]
output = Solution().maxSubArray(input)

print(output)