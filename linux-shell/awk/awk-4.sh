#!/bin/bash

# You are provided a file with four space-separated columns containing the scores of students in three subjects.
# The first column, contains a single character (A-Z) - the identifier of the student.
# The next three columns have three numbers (each between 0 and 100, both inclusive) which are the
# scores of the students in English, Mathematics and Science respectively.

# Concatenate every 2 lines of input with a semi-colon.


# Sample Input
# A 25 27 50
# B 35 37 75
# C 75 78 80
# D 99 88 76

# Sample Output
# A 25 27 50;B 35 37 75
# C 75 78 80;D 99 88 76

awk '{printf (NR%2==0) ? $0 "\n" : $0 ";"}'
