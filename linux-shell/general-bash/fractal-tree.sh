#!/bin/bash

n=5
baseline=""
res=()
height=16
graphwidth=100
graphheight=63
center=$(($graphwidth/2))
numberbranches=1
verticaladjustment=0

# columns and rows init
for x in `seq 1 $graphwidth`; do baseline+="_"; done
for y in `seq 1 $graphheight`; do res[$y]=$baseline; done

# CODE IS TERRIBLE. NOT PROUD

function createBranch {
  center=$1
  adjustment=$2
  width=$3

  res[$baseposition]=$(echo ${res[$baseposition]} | sed s/./1/$(($center-$adjustment)))
  res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$((($center-$adjustment)-$width)))
  res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$((($center-$adjustment)+$width)))

  res[$baseposition]=$(echo ${res[$baseposition]} | sed s/./1/$(($center+$adjustment)))
  res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$((($center+$adjustment)-$width)))
  res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$((($center+$adjustment)+$width)))
}

# modify lines
for i in `seq 1 $n`; do
    for c in `seq 1 $height`; do
        baseposition=$(($graphheight-$c+1-$verticaladjustment))
        branchline=$(($graphheight-$(($height))-$c+1-$verticaladjustment))

        # create left and right outer branches
        horizontaladjustment=$(($verticaladjustment/2))
        createBranch $center $horizontaladjustment $c

        # inner branches
        if [ $numberbranches -gt 2 ]; then
          branchesToMake=$((numberbranches - 2))
          right=$(($center+$horizontaladjustment-$height*4))
          left=$(($center-$horizontaladjustment+$height*4))

          for r in `seq 1 $branchesToMake`; do
            res[$baseposition]=$(echo ${res[$baseposition]} | sed s/./1/$right)
            res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$(($right-$c)))
            res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$(($right+$c)))

            res[$baseposition]=$(echo ${res[$baseposition]} | sed s/./1/$left)
            res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$(($left-$c)))
            res[$branchline]=$(echo ${res[$branchline]} | sed s/./1/$(($left+$c)))

            right=$(($center+$horizontaladjustment-$height*4*$r))
          done
        fi
    done
    verticaladjustment=$(($verticaladjustment+$height*2))
    height=$(($height/2))
    numberbranches=$((numberbranches*2))
done

# print
for line in ${res[@]}; do echo $line; done
