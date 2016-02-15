---
layout: post
title: solr 5 快速入门
tags: [solr]
---

## 下载安装

[下载 solr 最新](http://mirror.bit.edu.cn/apache/lucene/solr/) 如 solr 5.4.1

解压到, 如 ~/Downloads/runtime

```bash
cd ~/Downloads/runtime/solr-5.4.1

#启动 solr
bin/solr start
```

## create-core

```bash
#用 sample_techproducts_configs 示例创建 core
bin/solr create_core -c demo -d sample_techproducts_configs

#http://localhost:8983/solr/#/ 可以选择 demo 的 core 了
```

创建输出结果如下

```
Copying configuration to new core instance directory:
/Users/chenlb/Downloads/runtime/solr-5.4.1/server/solr/demo

Creating new core 'demo' using command:
http://localhost:8983/solr/admin/cores?action=CREATE&name=demo&instanceDir=demo

{
  "responseHeader":{
    "status":0,
    "QTime":1337},
  "core":"demo"}
```

## add-doc

可以在 http://localhost:8983/solr/#/demo/documents 里添加 doc (界面里 Document Type 使用 JSON), 如

```json
{"id":"A","title":"solr 5 快速入门", "popularity":3}
```

可以指添加，(界面里 Document Type 使用 'Solr Command (raw XML or JSON)')

```json
[
{"id":"B","title":"lucene 文档B", "popularity":5},
{"id":"C","title":"doc 批量添加", "popularity":3},
{"id":"D","title":"如此简单", "popularity":4}
]
```

但这批量，界面上没有 commit 的选项，要手动 commit 下。使用

```
#手动 commit
http://localhost:8983/solr/demo/update?commit=true

#看结果。有4个文档了。
```

### post-tool (url 命令添加文档)

```bash
cd ~/Downloads/runtime/solr-5.4.1

#java post tool 添加
java -Durl=http://localhost:8983/solr/demo/update -Ddata=args -Dtype=application/json -jar example/exampledocs/post.jar '
[
{"id":"A","title":"solr 5 快速入门", "popularity":3},
{"id":"B","title":"lucene 文档B", "popularity":5},
{"id":"C","title":"doc 批量添加", "popularity":3},
{"id":"D","title":"如此简单", "popularity":4}
]
'
```

### curl-post

```bash
curl -X POST -H 'Content-Type: application/json' 'http://localhost:8983/solr/demo/update?commit=true' --data-binary '
[
{"id":"E","title":"curl doc 批量添加", "popularity":2}
]
'
```
