#!/bin/bash

# There are N integers in an array A. All but one integer occur in pairs.
# Your task is to find the number that occurs only once.

# Input Format
# The first line of the input contains an integer N, indicating the number of integers.
# The next line contains N space-separated integers that form the array A.

# Output Format
# Output S, the number that occurs only once.

# Sample Input:1
# 1
# 1

# Sample Output:1
# 1

# Sample Input:2
# 3
# 1 1 2

# Sample Output:2
# 2

# Sample Input:3
# 5
# 0 0 1 2 1

# Sample Output:3
# 2

read n
read arr

echo ${arr[@]} | tr " " "\n" | sort -n | uniq -u
