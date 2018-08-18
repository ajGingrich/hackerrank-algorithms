#!/bin/bash

# Given three integers (X, Y, and Z) representing the three sides of a triangle,
# identify whether the triangle is Scalene, Isosceles, or Equilateral.

# Input Format
# Three integers, each on a new line.

# Output Format
# One word: either "SCALENE" or "EQUILATERAL" or "ISOSCELES" (quotation marks excluded).

# Sample Input 1
# 2
# 3
# 4

# Sample Input 2
# 6
# 6
# 6

read x
read y
read z

if [[ $x -eq $y && $y -eq $z ]]; then
    echo "EQUILATERAL"
elif [[ $x -eq $y || $y -eq $z || $x -eq $z ]]; then
    echo "ISOSCELES"
else
    echo "SCALENE"
fi
