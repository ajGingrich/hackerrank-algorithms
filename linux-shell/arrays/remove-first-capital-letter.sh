#!/bin/bash

# Given a list of countries, each on a new line, your task is to read them into an array and then
# display the element indexed at 0. Note that indexing starts from .

# Input Format
# A list of country names. The only characters present in the country names will be upper or lower case characters
# and hyphens.

# Task
# You are given a list of countries, each on a new line. Your task is to read them into an array and then transform
# them in the following way:
#
# The first capital letter (if present) in each element of the array should be replaced with a dot ('.').
# Then, display the entire array with a space between each country's names.

# Output Format
# Transform the names as described and display the entire array of country names with a space between each of them.

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
# .amibia .auru .epal .etherlands .ewZealand .icaragua .iger .igeria .orthKorea .orway

arr=($(cat))
res=()

for country in ${arr[@]}; do
    res=("${res[@]}" "${country[@]/[A-Z]/.}")
done

echo ${res[@]}

# OR

sed s/[A-Z]/\./ | paste -s
