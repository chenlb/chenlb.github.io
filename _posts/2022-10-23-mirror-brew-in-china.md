---
layout: post
title: Homebrew使用国内镜像
tags: [brew,Homebrew,mirror]
---

## 科大Homebrew镜像

前提情况，已经安装了brew。配置镜像地址，把如下配置加入到 ```~/.zshrc```

```bash
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.ustc.edu.cn/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.ustc.edu.cn/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles"
# brew 4.0 及之后的版本使用新的元数据 JSON API 接口
export HOMEBREW_API_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles/api"
```

更新 brew

```bash
# 更新
brew update
```

如果使用 brew services

与 brew services 有关的文件，用于在 macOS (launchctl) 与 Linux (systemctl) 上管理 brew 安装的服务。
```bash
brew tap --custom-remote --force-auto-update homebrew/services https://mirrors.ustc.edu.cn/homebrew-services.git
```

Homebrew cask 软件仓库

```bash
brew tap --custom-remote --force-auto-update homebrew/cask https://mirrors.ustc.edu.cn/homebrew-cask.git
```

附：
* 科大brew镜像说明：http://mirrors.ustc.edu.cn/help/brew.git.html

注意：如果使用 git 来代替 ssh 的要改回来，编辑 ~/.gitconfig，删除如下内容

```
[url "git@github.com:"]
    insteadof= https://github.com/
```
