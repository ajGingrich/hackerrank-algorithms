#!/bin/python

import sys

n = int(raw_input().strip())
a = map(int, raw_input().strip().split(' '))

totalSwaps = 0

for i in range(len(a)-1):
    numSwaps = 0
    for j in range(len(a)-1):
        if a[j] > a[j+1]:
            temp = a[j+1]
            a[j+1] = a[j]
            a[j] = temp
            numSwaps += 1
            totalSwaps += 1
    if numSwaps == 0:
        break

print("Array is sorted in " + str(totalSwaps) + " swaps.")
print("First Element: " + str(a[0]))
print("Last Element: " + str(a[len(a) - 1]))
