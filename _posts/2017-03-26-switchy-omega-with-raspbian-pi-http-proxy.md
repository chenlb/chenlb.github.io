---
layout: post
title: SwitchyOmega + Raspberry Pi 打造科学上网环境
tags: [Raspberry Pi,tinyproxy,vpn,SwitchyOmega]
---

## 科学上网的方案情况

* goagent + 各类 switchy chrome 插件
  * 免费
  * 不稳定，配置复杂（从没配置成功过）
* 买国外 vps + (自建 vpn 或 代理)
  * 自主性强，可控性强
  * 维护复杂；vps 有区域性，有地区些慢（访问有些网站）
* 直接买 vpn
  * 服务稳定，速度快
  * 不能用 switchy 类插件，一但连接 vpn 就全部应用都用vpn（只想用 google 而已）

## 自制上网方案

* 直接买靠谱的 vpn。推荐用 [ExpressVPN](http://www.expressrefer.com/refer-a-friend/30-days-free/?referrer_id=8321376&utm_campaign=referrals&utm_medium=copy_link&utm_source=referral_dashboard) 30 天试用免费， $8/月。
* Raspberry Pi（树莓派）作为家庭服务器，安装各种代理，如 http 代理 tinyproxy。￥230。
* SwitchyOmega 的 chrome 插件，配置很方便，像 google.com 的这种才走代理。

## 安装 SwitchyOmega

首先，在自己电脑上连接 ExpressVPN，搜索 SwitchyOmega 插件安装。

### 配置 proxy

在情景模式下的 proxy 里，加上 树莓派 ip （路由器里设置好，静态ip），端口 8888。

![auto switch](/assets/pics/proxy.png)

### 配置规则

在情景模式下的 auto switch 里，使用 "规则列表"，Switchy 选项的地址里加上我之前试用的地址（如下，选一个，立即更新即可。github的不能访问用 coding 的）：
  * [https://chenlb.github.io/assets/switchy_omega/OmegaRules__auto_switch.txt](https://chenlb.github.io/assets/switchy_omega/OmegaRules__auto_switch.txt)
  * [https://chenlb.coding.me/assets/switchy_omega/OmegaRules__auto_switch.txt](https://chenlb.coding.me/assets/switchy_omega/OmegaRules__auto_switch.txt)

如下图

![auto switch](/assets/pics/auto_switch.png)

## 在树莓派设置连接 ExpressVPN

使用[手动设置配置 OpenVPN](https://www.get-express-in-cn.site/setup#manual)

### 安装 OpenVPN

```bash
sudo apt-get -y install openvpn
```

### 保存密码成文件

把 usename/password 保存到如 pw.txt 里，第一行 usename，第二行 password

### OpenVPN 配置

在界面里下载 OpenVPN 配置，如 选 "Hong Kong - 2"，文件如：my_expressvpn_hong_kong_-_2_udp.ovpn，并修改

```bash
#注释掉verify-x509-name，OpenVPN 不认识这个参数
verify-x509-name Server name-prefix

#追加 log 设置
log /home/pi/openvpn/openvpn.log

#密码从文件读，auth-user-pass 后面加上用户/密码文件，如
auth-user-pass /home/pi/openvpn/pw.txt
```

### 启动 OpenVPN

```bash
sudo  openvpn --config /home/pi/openvpn/my_expressvpn_hong_kong_-_2_udp.ovpn &

#查询情况
tail -f /home/pi/openvpn/openvpn.log
```

说明：

不注释 verify-x509-name，报错：

```
Options error: Unrecognized option or missing parameter(s) in my_expressvpn_hong_kong_-_2_udp.ovpn:13: verify-x509-name (2.2.1)
Use --help for more information.
```

### 验证

```bash
curl -I www.google.com

#验证成功，如下
$ curl -I www.google.com
HTTP/1.1 302 Found
Cache-Control: private
Content-Type: text/html; charset=UTF-8
Location: http://www.google.com.hk/?gfe_rd=cr&ei=VVXXWKutJK3o8Aek7LiYCw
Content-Length: 262
Date: Sun, 26 Mar 2017 05:44:53 GMT
```

## 安装 http 代理 tinyproxy

```bash
sudo apt-get -y install tinyproxy
```

安装后默认启动好，端口是 8888。

之前设置好了 SwitchyOmega。现在打开 chrome 测试下访问 www.google.com
