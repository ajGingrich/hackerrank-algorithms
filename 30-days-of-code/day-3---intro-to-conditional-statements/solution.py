#!/bin/python3

import sys


N = int(input().strip())

def isWeird(num):
    if num % 2 != 0:
        return 'Weird'
    if num >= 2 and num <= 5:
        return 'Not Weird'
    if num >= 6 and num <= 20:
        return 'Weird'
    if num > 20:
        return 'Not Weird'

print(isWeird(N))