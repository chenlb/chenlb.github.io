---
layout: post
title: hadoop 使用常见问题汇总
tags: [hadoop,faq]
---

## macbook 安装 native-hadoop

在 mac 上使用 hadoop 命令时，会提示

```
WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform
```

原因是发布版，没有 mac 的 native 库存。要下载源码编译。

```bash
#编译前安装依赖
#protobuf
brew install protobuf@2.5
#安装 protobuf 不会连接到 /usr/local/bin 里。
ln -s /usr/local/Cellar/protobuf@2.5/2.5.0/bin/protoc /user/local/bin/protoc

#openssl, cmake
brew install openssl
brew install cmake

#编译
#编译前要设置 openssl 的路径
export OPENSSL_ROOT_DIR=/usr/local/Cellar/openssl/1.0.2k

mvn package -Pdist,native -DskipTests -Dtar

#把 hadoop-2.8.1-src/hadoop-dist/target/hadoop-2.8.1/lib/native 目录的内容覆盖 lib/native
```
