---
layout: post
title: hadoop 集群安装
tags: [hadoop,install]
---

## 准备

### 机器准备

![yarn_architecture](http://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/yarn_architecture.gif)

先看 yarn 架构。使用一个 namenode 和 resource 管理。两台都来做 datenode 和 node 管理。先用 3 台机器来构建。

每台机器改 host 对应 ip。/etc/hosts

```
namenode.hadoop
node1.hadoop
node2.hadoop
```

namenode.hadoop 可以免密码登录到 node1.hadoop 和 node2.hadoop。

```bash
#namenode 生成 key
ssh-keygen -t dsa -P '' -f ~/.ssh/id_dsa

scp ~/.ssh/id_dsa.pub node1.hadoop:~/namenode-id_dsa.pub
scp ~/.ssh/id_dsa.pub node2.hadoop:~/namenode-id_dsa.pub
```


分别登录到 node1.hadoop 和 node2.hadoop

```bash
cat ~/namenode-id_dsa.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### 下载 hadoop

[hadoop 2.7.2](http://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-2.7.2/hadoop-2.7.2.tar.gz)

```bash
#[chenlb@namenode ~]$
wget http://mirror.bit.edu.cn/apache/hadoop/common/hadoop-2.7.2/hadoop-2.7.2.tar.gz

tar -zxf hadoop-2.7.2.tar.gz
```

## 配置

3 台机器创建 hadoop 的临时目录

```bash
mkdir -p /home/chenlb/bigdata/tmp
chmod 777 /home/chenlb/bigdata/tmp
```

设置 hadoop java 环境

```bash
vi ~/hadoop-2.7.2/etc/hadoop/hadoop-env.sh
export JAVA_HOME=/usr/java/latest
```

### master

进入 hadoop-2.7.2/etc/hadoop

修改 core-site.xml 如下

```xml
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://namenode.hadoop:9000</value>
    </property>
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/home/chenlb/bigdata/tmp</value>
    </property>
</configuration>
```

修改 hdfs-site.xml 如下

```xml
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>3</value>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>file:///home/chenlb/bigdata/tmp/dfs/name</value>
    </property>
</configuration>
```

修改 yarn-site.xml 如下

```xml
<configuration>
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>namenode.hadoop</value>
    </property>
</configuration>
```

修改 mapred-site.xml

```xml
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
</configuration>
```

### slave

从 master 复制一下

```bash
cd ~
cp -r hadoop-2.7.2 hadoop-2.7.2-slave
cd hadoop-2.7.2-slave/etc/hadoop
```

core-site.xml 跟 master 一样，不用修改。


修改 hdfs-site.xml 如下

```xml
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>3</value>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>file:///home/chenlb/bigdata/tmp/dfs/data</value>
    </property>
</configuration>
```

修改 yarn-site.xml 如下

```xml
<configuration>
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>namenode.hadoop</value>
    </property>
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
    </property>
</configuration>
```

修改 mapred-site.xml

```xml
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
    <property>
        <name>mapreduce.jobhistory.address</name>
        <value>namenode.hadoop:10020</value>
    </property>
</configuration>
```

把 hadoop-2.7.2-slave 复制到 node1.hadoop 和 node2.hadoop。最好目录结果一致，如 /home/chenlb/hadoop-2.7.2

## 启动

在 master 的 /home/chenlb/hadoop-2.7.2/etc/hadoop/slaves 的内容修改如下。

```
node1.hadoop
node2.hadoop
```

在 master 机器上执行

```bash
cd /home/chenlb/hadoop-2.7.2

#格式化
bin/hdfs namenode -format

#启动 hdfs
sbin/start-dfs.sh

#启动 yarn
sbin/start-yarn.sh

#启动job history server
sbin/mr-jobhistory-daemon.sh start historyserver
```

名机器可以用 jps 看 java 程序。

## 运行 WordCount 示例

```bash
bin/hdfs dfs -mkdir /user
bin/hdfs dfs -mkdir /user/chenlb
bin/hdfs dfs -put etc/hadoop /user/chenlb/input

#查看
bin/hdfs dfs -ls /user/chenlb/input

#运行 mr
bin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-2.7.2.jar grep /user/chenlb/input /user/chenlb/output 'dfs[a-z.]+'

#查询运行结果
bin/hdfs dfs -cat /user/chenlb/output/*
```

## 独立启动一台 node

```bash
#启动 datanode
sbin/hadoop-daemons.sh --script hdfs start datanode

#启动 node 管理
sbin/yarn-daemons.sh start nodemanager
```


## 资料参考

http://www.cnblogs.com/ee900222/p/hadoop_2.html
