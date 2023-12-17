

"""
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
"""

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
    def print_linked_list(head):
        current = head
        while current is not None:
            print(current.val)
            current = current.next
        
        
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        return self.helper(l1,l2,False)

    def helper(self,l1, l2,hasCarry):

        if l1 is None and l2 is None:
            return ListNode(1,None) if hasCarry else None

        if l1 is not None and l2 is not None:

            digit = l1.val + l2.val + 1 if hasCarry else l1.val + l2.val

            if digit >= 10:
                lastDigit = int(str(digit)[len(str(digit)) - 1])
                return ListNode(lastDigit, self.helper(l1.next, l2.next, True))
            else:
                return ListNode(digit, self.helper(l1.next, l2.next, False))

        elif l1 is not None and l2 is None:

            digit = l1.val + 1 if hasCarry else l1.val

            if digit >= 10:
                lastDigit = int(str(digit)[len(str(digit)) - 1])
                return ListNode(lastDigit, self.helper(l1.next, l2, True))
            else:
                return ListNode(digit, self.helper(l1.next, l2, False))

        elif l1 is None and l2 is not None:
            digit = l2.val + 1 if hasCarry else l2.val

            if digit >= 10:
                lastDigit = int(str(digit)[len(str(digit)) - 1])
                return ListNode(lastDigit, self.helper(l1, l2.next, True))
            else:
                return ListNode(digit, self.helper(l1, l2.next, False))

        return None


l1 = ListNode(2)
l1.next = ListNode(4)
l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)


solution = Solution()
result = solution.addTwoNumbers(l1, l2)

print(result.print_linked_list())
