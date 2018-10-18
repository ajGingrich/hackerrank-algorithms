"""
Detect a cycle in a linked list. Note that the head pointer may be 'None' if the list is empty.
A Node is defined as:

    class Node(object):
        def __init__(self, data = None, next_node = None):
            self.data = data
            self.next = next_node
"""


def has_cycle(head):
    # use Floyd's cycle Finding Algorithm

    # list doesn't exist so return false immediately
    if head is None:
        return False

    slow = head
    fast = head

    while True:

        # first check that that next exists and then do one hop
        if slow.next is None:
            return False
        else:
            slow = slow.next

        # first check that that two ahead exists and then do two hops
        if fast.next.next is None:
            return False
        else:
            fast = fast.next.next

        # when the two meet there must be a loop
        if slow is fast:
            return True