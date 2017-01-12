---
layout: post
title: gitbook 初步使用
tags: [gitbook]
---

## Use Gitbook

可以在 [gitbook 官方代码](https://github.com/GitbookIO/gitbook) 看到命令行使用方法。

### mac install gitbook

由于 brew cask 安装不上 gitbook。就用 npm 吧。

```bash
brew install npm

#npm 安装 gitbook，请看官方说明
npm install gitbook -g
```

## Gitbook Format

gitbook 需要一个 SUMMARY.md 和 README.md。

* SUMMARY.md - 它是目录索引内容。
* README.md - 介绍内容。

比如进入 ./hello-gitbook 目录

SUMMARY.md 文件内容如下:

```markdown
# Summary

* [介绍](README.md)
* [第1章: Java 入门](ch01/README.md)
  * [1.1 节: java 入门](ch01/java-beginning.md)
  * [1.2 节: jdk 安装](ch01/jdk-install.md)
* [第2章: 网络编程](ch02/README.md)
  * [2.1 节: TCP 原理](ch02/tcp-theory.md)
```

在以上的 md 文件写 markdown 格式的内容就可以了。

## 生成 html 书

```bash
#cd ./hello-gitbook
gitbook build .
```

然后在 hello-gitbook 会多一个 _book 的目录。是 html 书的内容。打开 index.html 即可看到。

## 去掉分享连接

想去掉 facebook 等分享连接，可以在 book.json 里指定。

```json
{
  "links": {
    "gitbook": false,
    "sharing": {
      "google": false,
      "facebook": false,
      "twitter": false,
      "all": false
    }
  }
}
```

现生成 html 看看，就没有连接了。

## Gitbook GUI

如果使用 gitbook 命令比较麻烦可以使用它的 GUI。可以在 [gitbook editor](https://www.gitbook.com/editor) 找到。

有各个平以的 GUI，包括 linux、win、mac os x。

~~不过 gitbook 以后重点发展在线编辑。但 GUI 还可以用。~~

如图：

![gitbook editor](https://www.gitbook.com/assets/images/editor/preview_osx.png)
