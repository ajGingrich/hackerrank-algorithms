#!/bin/bash

# Given an input file, with N credit card numbers, each in a new line, your task is to reverse the ordering of segments
# in each credit card number. Assume that the credit card numbers will have 4 space separated segments with 4 digits each.
#
# If the original credit card number is 1434 5678 9101 1234, transform it to 1234 9101 5678 1434.

# Sample Input
# 1234 5678 9101 1234
# 2999 5178 9101 2234
# 9999 5628 9201 1232
# 8888 3678 9101 1232

# Sample Output
# 1234 9101 5678 1234
# 2234 9101 5178 2999
# 1232 9201 5628 9999
# 1232 9101 3678 8888

sed 's/\([0-9]\{4\}\)[ ]\([0-9]\{4\}\)[ ]\([0-9]\{4\}\)[ ]\([0-9]\{4\}\)/\4 \3 \2 \1/g'
