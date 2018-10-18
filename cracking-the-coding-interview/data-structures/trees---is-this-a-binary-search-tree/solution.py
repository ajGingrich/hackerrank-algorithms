import sys

""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""


def checkBST(root):
    return check_node(root, -sys.maxsize, sys.maxsize)


def check_node(root, min, max):
    if root is None:
        return True
    if root.data < min or root.data > max:
        return False
    return check_node(root.left, min, root.data-1) and check_node(root.right, root.data+1, max)