---
layout: post
title: 友好地显示 dmesg 输出的时间
tags: [dmesg,time]
---

## 直接加 -T 参数

dmesg 不同的版本，可以加方式不同，有人说可用 -T 参数来显示友好的 dmesg 时间信息。但我这里的机器不行。没有这个参数。

## 用脚本实现

原理是：dmesg 打出的时间是机器启动后开始算的 [秒].[纳秒] 格式的时间。

/proc/uptime 保存了启动后多少秒的数字。

简单地可以这样认为：dmesg 打信息是拿当时的 /proc/uptime 作为时间信息。

用脚本 dmesg_time.sh 还原

```bash
#!/bin/sh

usage() {
	echo "	$0 <dmesg_time>"
}

if [ $# -lt 1 ]
then
    usage
    exit 1
fi

MY_TIME=$1
date -d "1970-01-01 UTC `echo "$(date +%s)-$(cat /proc/uptime|cut -f 1 -d' ')+$MY_TIME"|bc ` seconds" +'%Y-%m-%d %H:%M:%S'
```

使用示例

```bash
sh dmesg_time.sh 24852885.81
2015-05-09 15:51:10
```
