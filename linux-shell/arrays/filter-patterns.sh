#!/bin/bash

# Given a list of countries, each on a new line, your task is to read them into an array and then
# display the element indexed at 0. Note that indexing starts from .

# Input Format
# A list of country names. The only characters present in the country names will be upper or lower case characters
# and hyphens.

# Task
# You are given a list of countries, each on a new line. Your task is to read them into an array and then filter out
# (remove) all the names containing the letter 'a' or 'A'.

# Output Format
# From the given list, remove the names that contain 'a' or 'A' in them. If there are no names left after
# removing these characters, you should display a blank line.

# Sample Input
# Namibia
# Nauru
# Nepal
# Netherlands
# NewZealand
# Nicaragua
# Niger
# Nigeria
# NorthKorea
# Norway

# Sample Output
# Niger

arr=($(cat))

for country in ${arr[@]}; do
    if [[ $country != *"a"* ]]; then
        echo $country
    fi
done

# OR

grep -v [a]
