from itertools import zip_longest

def sum_strings(s1, s2):
    arr1 = list(s1)
    arr2 = list(s2)
    
    result = [x + y for x, y in zip_longest(arr1, arr2, fillvalue='')]
    
    return ''.join(result)


s1 = "abcdef"
s2 = "pqr"
sum_result = sum_strings(s1, s2)
print(sum_result) 

