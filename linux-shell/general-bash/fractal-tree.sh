#!/bin/bash

read n
baseline=""
res=()
height=16
graphwidth=100
graphheight=63
center=$(($graphwidth/2))

# columns init
for x in `seq 1 $graphwidth`; do
    baseline+="_"
done

# rows init
for y in `seq 1 $graphheight`; do
    res[$y]=$baseline
done

# modify lines
for i in `seq 1 $n`; do
    for c in `seq 1 $(($height))`; do
        verticaladjustment=$(($height*4*($i-1)))
        baseposition=$(($graphheight-$c+1-$verticaladjustment))
        branchline=$(($graphheight-$(($height))-$c+1-$verticaladjustment))

        # create base and branches
        for b in `seq 1 $i`; do
          res[$baseposition]=$(echo ${res[$baseposition]} | sed s/./1/$(($center*$b)))
          res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$(($center*$b-$c)))
          res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$(($center*$b+$c)))
        done
    done
    center=$(($center-$height))
    height=$(($height/2))
done

# print
for line in ${res[@]}; do
    echo $line
done
