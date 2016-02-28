---
layout: post
title: hadoop 本地调度 mapreduce 程序
tags: [hadoop,debug]
---

## 创建 java(maven) 项目

pom.xml

```xml
<dependencies>
  <dependency>
    <groupId>org.apache.hadoop</groupId>
    <artifactId>hadoop-common</artifactId>
    <version>2.7.2</version>
    <scope>provided</scope>
  </dependency>
  <dependency>
    <groupId>org.apache.hadoop</groupId>
    <artifactId>hadoop-client</artifactId>
    <version>2.7.2</version>
    <scope>provided</scope>
  </dependency>
</dependencies>

<build>
  <plugins>
    <plugin>
      <artifactId>maven-assembly-plugin</artifactId>
      <configuration>
        <descriptorRefs>
          <descriptorRef>jar-with-dependencies</descriptorRef>
        </descriptorRefs>
      </configuration>
      <executions>
        <execution>
          <id>make-dependencies</id>
          <phase>package</phase>
          <goals>
            <goal>single</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```

把官方的 [WordCount](http://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) 加进来

在 src/test/java 下创建 WordCountTest 的 main 来执行

```java
package com.chenlb.demo.hadoop;

import org.apache.commons.io.FileUtils;

import java.io.File;

/**
 * @author chenlb on 2016-02-27 21:51.
 */
public class WordCountTest {

	public static void main(String[] args) throws Throwable {
		FileUtils.deleteQuietly(new File("output"));
		String command = "target/hadoop-demo-1.0.0-SNAPSHOT.jar com.chenlb.demo.hadoop.WordCount input output";
		org.apache.hadoop.util.RunJar.main(command.split(" "));
	}
}
```

maven 生成 jar 后可以运行。 ```mvn package```。 这样可以用 eclipse 或 idea 调试。

在项目里创建 input 目录，放一些 txt。运行 hadoop 本地单机版。

代码测试好了，可以把放到 hadoop-demo-1.0.0-SNAPSHOT-jar-with-dependencies.jar 线上跑。
