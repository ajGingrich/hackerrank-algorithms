#!/bin/python3

import math
import os
# Complete the countInversions function below.
def countInversions(arr):
    test = mergeSort(arr)

    return 0

def mergeSort(arr):
    array_length = len(arr)
    if array_length < 2:
        return arr

    middle = math.floor(len(arr) / 2)
    left = arr[:middle]
    right = arr[middle:]

    return merge(mergeSort(left), mergeSort(right))

def merge(left, right):
    res = []

    while len(left) and len(right):
        if left[0] < right[0]:
            res.append(left.pop(0))
        else:
            res.append(right.pop(0))

    return res + left + right

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        arr = list(map(int, input().rstrip().split()))

        result = countInversions(arr)

        fptr.write(str(result) + '\n')

    fptr.close()
