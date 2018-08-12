#!/bin/bash

# You are given a file with four space separated columns containing the scores of students in three subjects.
# The first column contains a single character (), the student identifier.
# The next three columns have three numbers each. The numbers are between  and , both inclusive.
# These numbers denote the scores of the students in English, Mathematics, and Science, respectively.
#
# Your task is to identify whether each of the students has passed or failed.
# A student is considered to have passed if (s)he has a score  or more in each of the three subjects.

# Sample Input
# A 25 27 50
# B 35 37 75
# C 75 78 80
# D 99 88 76

# Sample Output
# A : Fail
# B : Fail
# C : Pass
# D : Pass

awk '{
if($2 >=50 && $3 >=50 && $4 >= 50)
    print $1,":","Pass"
else
    print $1,":","Fail"
}'
