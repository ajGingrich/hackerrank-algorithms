#!/bin/bash

uniq -i -c | tr -s ' ' | cut -c2-

## uniq -i -c | tr -d [:blank:] | sed 's/.\{1\}/& /'
