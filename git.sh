#!/bin/bash
startTime=`date +%Y%m%d-%H:%M:%S`
startTime_s=`date +%s`
workdir=$(cd $(dirname $0); pwd)
git add .
git commit -m "updata $1"
git pull
git push
endTime=`date +%Y%m%d-%H:%M:%S`
endTime_s=`date +%s`
sumTime=$[ $endTime_s - $startTime_s ]
clear
echo 🧭 "$sumTime's"
echo ✅ updataSuccess
echo 🗂 $workdir
echo 🕖 `date +'%Y-%m-%d %H:%M:%S'`
echo 🌈