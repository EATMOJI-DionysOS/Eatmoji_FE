#!/bin/sh

# 현재 위치: EATMOJI_FE/eatmoji
mkdir -p ../output

# eatmoji 디렉토리의 내용만 복사
rsync -av --exclude=node_modules --exclude=.next --exclude=output --exclude=build.sh ./ ../output