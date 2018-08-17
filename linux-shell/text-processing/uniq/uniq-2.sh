#!/bin/bash

uniq -c | tr -s ' ' | cut -c2-

## uniq -c | tr -d [:blank:] | sed 's/.\{1\}/& /'
