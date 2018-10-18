#!/bin/python3

import sys

def consecutive_characters(string):
    res = 1
    max = 1

    for i in range(1, len(string)):
        if string[i] == string[i-1]:
            res += 1
            if res > max:
                max = res
        else:
            res = 1
    return max

n = int(input().strip())
binary = format(n, 'b')
print(consecutive_characters(binary))


