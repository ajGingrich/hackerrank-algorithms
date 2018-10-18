#!/bin/python3

import sys

def hour_glass(arr):
    max = -9*6
    sum = 0

    for i in range(1, 5):
        for j in range(1, 5):
            # same square
            sum += arr[i][j]

            # top level
            sum += arr[i-1][j-1]
            sum += arr[i-1][j]
            sum += arr[i-1][j+1]

            # bottom level
            sum += arr[i+1][j-1]
            sum += arr[i+1][j]
            sum += arr[i+1][j+1]

            if sum > max:
                max = sum;
            sum = 0;
    return max

arr = []
for arr_i in range(6):
    arr_t = [int(arr_temp) for arr_temp in input().strip().split(' ')]
    arr.append(arr_t)

print(hour_glass(arr))




