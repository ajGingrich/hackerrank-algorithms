#!/bin/python3

import sys

def bitwise(n, k):
    if k-1 | k <= n:
        return k-1
    return k-2

t = int(input().strip())
for a0 in range(t):
    n,k = input().strip().split(' ')
    n,k = [int(n),int(k)]
    print(bitwise(n, k))
