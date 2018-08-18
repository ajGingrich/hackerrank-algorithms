#!/bin/bash

# Given a list of countries, each on a new line, your task is to read them into an array and then
# display the element indexed at 0. Note that indexing starts from .

# Input Format
# A list of country names. The only characters present in the country names will be upper or lower case characters
# and hyphens.

# Output Format
# A single integer - the number of elements in the array.

arr=($(cat))
echo ${#arr[@]}
