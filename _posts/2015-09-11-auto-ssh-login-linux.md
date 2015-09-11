---
layout: post
title: ssh 自动交互登录
tags: [ssh, login]
---

# 自动交互登录

```bash
#!/usr/bin/expect
set timeout 60
if { $argc != 1 } {
	puts "usage"
        puts "	jump <host>"
        exit 0
}
spawn /usr/bin/ssh you_name@[lindex $argv 0]
expect "*assword*"
send "you_pw\n"
interact
```
