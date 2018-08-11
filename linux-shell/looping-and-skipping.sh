#!/bin/bash
for x in `seq 1 100`; do
  if [ $((x % 2)) != 0 ]; then
    echo $x
  fi
done
