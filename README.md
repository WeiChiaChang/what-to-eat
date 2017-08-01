# what-to-eat
> A useful tool that helps you deciding what to eat for lunch

回台南工作打滾也半年多了，每天最煩惱的倒不是 deadline，而是不知道要吃什麼午餐。

研究了一下 Mac 自帶的 osascript 和 shell script，並搭配簡單的 crontab 每日定時推播。


## Installing / Getting started

A quick introduction of how to use, first of all:

```shell
git clone https://github.com/WeiChiaChang/what-to-eat.git
```

> Recommend installing on desktop directly, or you may have some tiny changes to make in show.sh file.

Add some crontab setting on your Mac:

```shell
crontab -e
```

You will enter a terminal with empty wording, is time to get your hands dirty with vim syntax:

> First, press <kbd>Esc</kbd> then <kbd>i</kbd>.

Then input:

```shell
20 12 * * 1-7  ~/Desktop/what-to-eat/show.sh
```

> This script will be automatically executed **at 12:20 on every day-of-week from Monday through Sunday**.

> [crontab-guru](https://crontab.guru/#20_12_*_*_1-7) will do a favor for you ✨.

Everything all done now! ![turtle](http://i.imgur.com/879dfXS.gif)
