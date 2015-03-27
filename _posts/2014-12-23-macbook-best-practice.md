---
layout: post
title: macbook 使用心得
tags: [mac]
---

使用了一段时间 macbook，写下心得。

## 软件推荐

### XtraFinder

增强 Finder 功能。

 * 多标签
 * 复制路径
 * 'shift + command + .' 来显示或关闭隐藏文件
 * 命令行从当前目录打开。

### SourceTree

git 的好工具 [SourceTree](http://www.sourcetreeapp.com/)。而且是免费的。也有 windows 版本。

### iTerm

比默认好用得多的 shell 终端

### Atom

对 git、github 很友好的文档编辑器。对 markdown 支持很好。支持 GFM 语法高亮。

### Alfred2

 * 可以快速打开应用程序。
 * 可以当计算器用。

### Sublime Text

文本编辑器，支持列编辑（alt + 移动选择）。

### Mou

markdown 文档编辑器。但 OS X Yosemite 10.10 后它保存后会卡。慢慢转移到 Atom 来。

### 其它软件

 * Microsoft Remote Desktop - 它可以远程连接 windows

### 收费软件

 * 1Password - 密码记录
 * Parallels Desktop - 虚拟机，安装 windows
 * OmniGraffle - 类似 visio
 * OmniPlan - 类似 Microsoft project

### Homebrew

使用 [brew](http://brew.sh/) 来管理软件。

安装

```bash
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)”
brew doctor
```

比如安装 go

```bash
brew install go
```

#### homebrew-cask

有了 brew 后，还可以安装 cask 插件 [homebrew-cask](https://github.com/caskroom/homebrew-cask)，它可以用 brew 方式安装界面的应用程序。

brew 0.9.5 以上可以如下安装。详细请看 [brew cask 官方使用文档](https://github.com/caskroom/homebrew-cask/blob/master/USAGE.md)。

```bash
brew install caskroom/cask/brew-cask
```

## 使用技巧

### 锁屏

用习惯了 windows 的 win + L 来销屏，在人离开一会时保密。

mac 有些人推荐用软件。在设置屏保时发现有触发角，可以设置睡眠，就把他当作销屏即可。

 * 系统偏好设置 -> 桌面与屏幕保护程序 -> 触发角 -> （在任一角选择：“将显示器置入睡眠状态”），例如左下角。
 * 系统偏好设置 -> 安全性与隐私 -> 通用 -> 钩上 "进入睡眠或开始屏幕保护程序"，并选择 “立即” 要求输入密码。

这样手示移到左下角时屏幕自动锁定。屏保后也要密码才能解销。

## 配置使用经验

### 安装 svn

```bash
brew install svn
```

安装完 svn 后要，换掉系统默认的。

```bash
sudo rm -rf /usr/bin/svn*
sudo ln -s /usr/local/bin/svn* /usr/bin/

#可以看到 brew 安装的 svn
ll -h /usr/local/bin/svn*
```

在项目目录中升级 svn 格式

```bash
svn upgrade
```

### vim 属性配置

如：语法高亮、显示行号

```bash
#vim ~/.vimrc
# 语法高亮
syntax on
# 显示行号
set number
# 显示光标所在位置的行号和列号
set ruler
```

### iTerm2 color

iTerm2 颜色设置

```bash
#vim ~/.bash_profile
export CLICOLOR=1
export LSCOLORS=gxfxcxdxbxegedabagacad
```

### ssh 保存 session

ssh 的 session  保存，没有退出再打开新窗口登录不用输入密码

```bash
#vim ~/.ssh/config
Host *
ControlMaster auto
ControlPath ~/.ssh/master-%r@%h:%p
```

### ssh 保持登录时间，不自动退出

```bash
#vim /etc/ssh_config

ServerAliveCountMax 36
ServerAliveInterval 80
TCPKeepAlive yes
```

### 创建 /home 目录

有些人应用目录写死在 /home/xxx 目录下的。mac 默认创建不了这目录，报如下错。

```bash
mkdir: /home/abc: Operation not supported
```

可以修改 /etc/auto_master

```bash
sudo vim /etc/auto_master
#把 /home 注释掉
```
