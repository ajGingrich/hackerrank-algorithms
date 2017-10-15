#!/bin/python3

import sys


n = int(input().strip())
num = str(n);

for i in range(1, 11):
    res = i * n
    print (num + ' x ' + str(i) + ' = ' + str(res))
