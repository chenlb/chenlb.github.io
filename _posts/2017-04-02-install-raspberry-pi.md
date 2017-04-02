---
layout: post
title: 安装 Raspberry Pi
tags: [Raspberry Pi]
---

## 镜像安装到 SD 卡

到[官网下载 raspbian lite 版](https://www.raspberrypi.org/downloads/raspbian/)。如 2017-03-02-raspbian-jessie-lite.img

把空的 SD 卡插入电脑，以 mac 为例。

```bash
#注意看 sd 是那个设备，df -h
#先 umount
$ sudo diskutil umount /dev/disk2s1
Volume NO NAME on disk2s1 unmounted

#下载的 raspberry 拷入 sd 卡
$ sudo dd bs=4m if=2017-03-02-raspbian-jessie-lite.img of=/dev/disk2

#使用可以 ssh 登录
$ touch /Volumes/boot/ssh
```

## 配置 raspberry pi

### 进入 raspi-config 配置

```bash
#可以修改密码、时区、默认语言等
sudo raspi-config
```

### 开启root账号

```bash
sudo passwd root
sudo passwd --unlock root
```

### vi 支持方向键

默认 vi 在编辑模式下不支持方向键，退格键。修改配置支持

```bash
#sudo vi /etc/vim/vimrc.tiny

set nocompatible
set backspace=2
```

### raspberry pi 3 B 连接 wifi

```bash
#sudo vi /etc/wpa_supplicant/wpa_supplicant.conf

#追回如下
network={
  ssid="your_ssid"
  psk="your_wifi_password"
}
```

### 网卡配置

路由断网了好像不会自动连接。改下以下参数。

```bash
#sudo vi /etc/network/interfaces

auto eth0
allow-hotplug eth0
iface eth0 inet dhcp
```

### 软件国内镜像源

对比了下，我使用 aliyun 的。

```bash
cd /etc/apt
#备份
sudo cp sources.list sources.list.bak

sudo vi sources.list

#aliyun 的镜像
deb http://mirrors.aliyun.com/raspbian/raspbian/ wheezy main non-free contrib
deb-src http://mirrors.aliyun.com/raspbian/raspbian/ wheezy main non-free contrib

#更新
sudo apt-get update
sudo apt-get install
```

## 其它安装

```bash
#时间同步
sudo apt-get install ntpdate

#jdk8
sudo apt-get install oracle-java8-jdk
```

## 挂载移动硬盘

```bash
#如果是新的，可以格式化为 ext4，从 fdisk 里找到目录，如 /dev/sda1
sudo fdisk -l
sudo mkfs.ext4 /dev/sda1

#挂在 /data 目录下
sudo mkdir /data
sudo mount /dev/sda1 /data
```

自动挂载

```bash
#blkid 查到 uuid
sudo blkid

#sudo vi /etc/fstab
UUID=XXX    /data    ext4    defaults    0    0
```
