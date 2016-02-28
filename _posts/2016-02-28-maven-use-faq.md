---
layout: post
title: maven 使用常见问题汇总
tags: [maven,mvn,faq]
---

## 把依赖打去 jar

pom.xml 里加插件

```xml
<build>
  <plugins>
    <plugin>
      <artifactId>maven-assembly-plugin</artifactId>
      <configuration>
        <!--
        <archive>
          <manifest>
            <mainClass>your.main.class</mainClass>
          </manifest>
        </archive>
        -->
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

provided 和 test 作用域的依赖不会进去。
