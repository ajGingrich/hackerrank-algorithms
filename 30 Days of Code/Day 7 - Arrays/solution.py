#!/bin/python3

import sys


def printArray(arr):
    for item in arr:
        print(item, end=" ")

    n = int(input().strip())
    arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

    arr.reverse()
    printArray(arr)


