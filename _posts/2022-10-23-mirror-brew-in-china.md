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
```

更新 brew

```bash
# 更新
brew update
```

附：
* 科大brew镜像说明：http://mirrors.ustc.edu.cn/help/brew.git.html

注意：如果使用 git 来代替 ssh 的要改回来，编辑 ~/.gitconfig，删除如下内容

```
[url "git@github.com:"]
    insteadof= https://github.com/
```
