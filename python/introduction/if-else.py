#!/bin/python3

N = int(input())

if N % 2 is not 0 or 6 <= N <= 20:
    print("Weird")
elif N > 2:
    print("Not Weird")
