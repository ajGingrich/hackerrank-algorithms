#!/bin/bash

# Given a list of countries, each on a new line, your task is to read them into an array
# and then display the entire array, with a space between each of the countries' names

# Input Format
# A list of country names. The only characters present in the country names will be upper or lower case characters
# and hyphens.

# Output Format
# Display the entire array of country names, with a space between each of them.

res=()

while read line; do
    res+="$line "
done

echo $res

or

arr=($(cat))
echo ${arr[*]}
