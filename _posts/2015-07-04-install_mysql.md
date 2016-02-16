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

## linux 安装

安装 cmake

```bash
wget http://www.cmake.org/files/v3.2/cmake-3.2.3.tar.gz
tar zxf cmake-3.2.3.tar.gz

./configure
make
make install
```

安装 mysql

```bash
cmake \
-DCMAKE_INSTALL_PREFIX=/usr/local/mysql \
-DMYSQL_DATADIR=/data/mysql \
-DSYSCONFDIR=/usr/locar/etc \
-DWITH_MYISAM_STORAGE_ENGINE=1 \
-DWITH_INNOBASE_STORAGE_ENGINE=1 \
-DWITH_MEMORY_STORAGE_ENGINE=1 \
-DWITH_READLINE=1 \
-DMYSQL_UNIX_ADDR=/tmp/mysql.sock \
-DMYSQL_TCP_PORT=3306 \
-DENABLED_LOCAL_INFILE=1 \
-DWITH_PARTITION_STORAGE_ENGINE=1 \
-DEXTRA_CHARSETS=all \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci

make
make install
```

