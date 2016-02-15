---
layout: post
title: solr 使用常见问题汇总
tags: [solr,faq]
---

## same-sort（排序值相同下，用什么排序）

使用指定字段排序，当排序值相同下，无下级排序字段情况下，用什么排序？

排序之前按 docid 从小到大遍历，然后再按字段值来堆排序。排序值相同情况下自然就是 docid 的顺序。

但要注意：

* 此情况下 desc 和 asc 对 docid 是无效的，统一就是 docid 顺序。
* 当相同 id 的 doc 更新后，它的 docid 变为最大了。所有一更新它就排在最后了。
