---
layout: post
title: git 使用常见问题汇总
tags: [git,faq]
---

# clone EOF

```
error: RPC failed; result=18, HTTP code = 20070 MiB | 11.00 KiB/s
fatal: The remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed
```

上面这种情况是git大，拉下来慢。可以像 [分步拉取](http://stackoverflow.com/questions/21277806/fatal-early-eof-fatal-index-pack-failed) 操作。

到第三步

```
git fetch --unshallow
```

也会出现上面的情况，可以运行多次。网速与人品。

# commit-reset 回退

git 的 commit 远程回退

```bash
#commit_id可用 git log –oneline 查看), 本地代码回退
git reset --hard commit_id
#远程提交回退
git push origin HEAD --force

#或者
git reset --hard HEAD~1
git push --force
```
