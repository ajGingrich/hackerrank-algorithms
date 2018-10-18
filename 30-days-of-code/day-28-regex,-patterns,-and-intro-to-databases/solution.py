#!/bin/python3

import sys
import re

res = []
def print_list(arr):
    for s in arr:
        print(s)

def is_match(email):
    p = re.compile('.*@gmail.com$')
    if re.search(p, email):
        return True
    return False

N = int(input().strip())
for a0 in range(N):
    firstName,emailID = input().strip().split(' ')
    firstName,emailID = [str(firstName),str(emailID)]

    if is_match(emailID):
        res.append(firstName)

res.sort()
print_list(res)
