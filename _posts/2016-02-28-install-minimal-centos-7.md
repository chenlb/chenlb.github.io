---
layout: post
title: 安装最小 CentOS 7
tags: [centos,install]
---

## install-centos

[下载 CentOS 7](http://isoredirect.centos.org/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-1511.iso)

按界面导向即可。

## 配置

### 启动网络

```bash
sudo vi /etc/sysconfig/network-script/ifcfg-eth0

#ONBOOT, no 改为 yes
#ONBOOT=yes

#启动网卡
service network start
```

如果出现 ```is not in the sudoers file``` 出问题可以。把当前用户加入到 wheel 用户组。

```bash
usermod -G wheel your_user_name
```

### 使用 163 yum 镜像

[163 yum 镜像官方说明](http://mirrors.163.com/.help/centos.html)

首先备份/etc/yum.repos.d/CentOS-Base.repo

```bash
cd /etc/yum.repos.d
mv CentOS-Base.repo CentOS-Base.repo.backup

#通过 curl 下载
curl -O http://mirrors.163.com/.help/CentOS7-Base-163.repo

#运行以下命令生成缓存
yum clean all
yum makecache
```

### 使用 yum 安装软件

```bash
#最小安装 ifconfig 都没有
#用 yum provides ifconfig 查看 ifconfig 在那个包。
sudo yum install net-tools

#wget
sudo yum install wget
```

### 修改 hostname

```bash
hostnamectl set-hostname <your_hostname>
```

### 安装 ntp

```bash
sudo yum install ntp

#开启动 ntp
systemctl enable ntpd.service
systemctl start ntpd.service

#timedate 使用 ntp
timedatectl set-ntp yes
```

### 远程 sudo

```bash
sudo chmod u+w /etc/sudoers

sudo vi /etc/sudoers
#注释requiretty
#Defaults    requiretty

sudo chmod u-w /etc/sudoers
```

### 安装 java

[下载 java8](http://download.oracle.com/otn-pub/java/jdk/8u74-b02/jdk-8u74-linux-x64.rpm)

```bash
sudo rpm -ivh jdk-8u74-linux-x64.rpm
```
