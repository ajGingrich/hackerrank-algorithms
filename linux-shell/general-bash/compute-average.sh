#!/bin/bash

# The first line contains an integer, N.
# N lines follow, each containing a single integer.

# Display the average of the integers, rounded off to three decimal places.

# Sample Input
# 4
# 1
# 2
# 9
# 8

# Sample Output
# 5.000

read N
sum=0

for x in `seq 1 $N`; do
    read val
    sum=$((sum+val))
done

printf "%.3f" $(echo $sum/$N | bc -l )
