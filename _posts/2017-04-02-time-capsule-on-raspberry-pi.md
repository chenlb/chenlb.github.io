---
layout: post
title: 树莓派 Raspberry Pi 打造 TimeCapsule
tags: [Raspberry Pi,TimeCapsule]
---

把树莓派当作家庭服务器后，有很多可以在树莓派上实现的。如 TimeCapsule。之前是自己是直接移动硬盘备份。

当树莓派接移动硬盘后，可以当作 nas。

## 树莓派准备

请看 [挂载移动硬盘](/2017/04/02/install-raspberry-pi.html#toc-10) 的文章。

之前是按照[树莓派打造廉价版TimeCapsule](http://jameszhan.github.io/2015/03/06/raspberry-time-capsule.html)，没有配置成功。

* 主要是因为，使用原来直接备份的移动硬盘 hfs。主要是挂载 hfs 盘后，不支持写（只读文件系统）。坑
* 后来看别人说，网络备份盘可以用其它格式。参考 [用树莓派搭建Time Machine备份机](https://www.ay27.com/2017/02/18/raspberry-Pi-time-machine/) 真的要感谢这个文章。

## 安装配置 netatalk

### 安装 netatalk

```
#据说要删除旧的，删除干净。
sudo apt-get --purge remove netatalk

#安装依赖，建设用官方镜像，不用 aliyun的
sudo apt-get -y install libdb5.1-dev libgcrypt11-dev avahi-daemon libavahi-client-dev libacl1-dev


#去 https://sourceforge.net/projects/netatalk/files/netatalk/3.1.11/ 页面下载 netatalk
tar -xzf netatalk-3.1.11.tar.gz
cd netatalk-3.1.11

#配置
./configure --with-zeroconf --with-init-style=debian-sysv --with-acls

#安装
make
sudo make install
```

### 配置 netatalk

创建用户

```bash
useradd your_user_name
usermod -aG users your_user_name

#目录授权
chown your_user_name:users /data/TimeCapsule
chmod 775 /data/TimeCapsule
```

修改 afp 配置

```
#vi /usr/local/etc/afp.conf

[Global]
; Global server settings
mimic model = TimeCapsule6,106
log level = default:warn
log file = /var/log/afpd.log
hosts allow = 196.168.0.0/16

; [Homes]
; basedir regex = /xxxx

; [My AFP Volume]
; path = /path/to/volume

[TimeMachine]
 path = /data/TimeCapsule
 time machine = yes
 valid users = your_user_name
```

启动 netatalk

```bash
#建议先重启下机器
sudo service avahi-daemon restart
sudo service netatalk restart
```

## 使用与效果

在 Time Machine 那里选择磁盘。

![select_time_capsule](/assets/pics/select_time_capsule.png)

选择后，使用刚在 raspberry 下创建的用户名和密码登录，就可以备份了。

![net_time_capsule](/assets/pics/net_time_capsule.png)

## 参考

* [用树莓派搭建Time Machine备份机](https://www.ay27.com/2017/02/18/raspberry-Pi-time-machine/)
* [Time Capsule - Raspberry Pi Time Machine Backup Server](https://raymii.org/s/articles/Build_a_35_dollar_Time_Capsule_-_Raspberry_Pi_Time_Machine.html)
