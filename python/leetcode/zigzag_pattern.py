"""
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)
"""
class Solution:
    def zig_zag(self, str, numb):
       if numb == 0 or len(str) <= numb:
           return str
       
       rows = [ [] for row in range(numb) ]
       
       index = 0
       step = 1
       
       for char in str:
            rows[index].append(char)
            if index == 0:
                step = 1
            
            if index == numb - 1:
                step = -1    
           
            index += step
       
        
       for i in range(len(rows)):
           rows[i] = ''.join(rows[i])
       
       return ''.join(rows)
        
        
        
        

sol = Solution().zig_zag("PAYPALISHIRING", 4)
print(sol)

