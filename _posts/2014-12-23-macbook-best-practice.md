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

使用 brew 来管理软件。

安装

```bash
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)”
brew doctor
```

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
