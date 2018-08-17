#!/bin/bash

ARRAY=($(cat))
echo ${ARRAY[@]:3:5}
