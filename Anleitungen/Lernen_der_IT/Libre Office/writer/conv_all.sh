#!/bin/sh

S="mkv"

for N in *${S}; do
  echo $N
  M=$(basename $N .$S)
  ffmpeg -i $M.$S  -strict -2 $M.mp4  
done
