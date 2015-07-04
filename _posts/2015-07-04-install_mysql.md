---
layout: post
title: 安装 mysql
tags: [mysql]
---

# 安装 mysql

http://dev.mysql.com/downloads/mysql/


## mac 安装

```bash
tar zxf mysql-5.6.25-osx10.9-x86_64.tar.gz
cd mysql-5.6.25-osx10.9-x86_64

#install db
./scripts/mysql_install_db --basedir=`pwd` --datadir=`pwd`/data --user=change_your_name_or_mysql

# start db
./bin/mysqld_safe &

# add root pw
./bin/mysqladmin -u root password 'change_your_password'
```

## window 安装

下载 mysql 的 msi 安装包

client

http://dev.mysql.com/downloads/workbench/
https://www.webyog.com/

