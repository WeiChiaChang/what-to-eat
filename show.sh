#!/bin/bash

# 找到相對應的目錄
cd $HOME/Desktop/what-to-eat
# 執行 main.js 取得隨機店家，並 assign 給 lunch
lunch=`node main.js`
# 跑 Mac 內建的 script，製造推播推知
osascript -e "display notification \"$lunch\" with title \"今天午餐吃什麼 ?\""
# 我叫 Mac 唸給妳聽！
say $lunch
