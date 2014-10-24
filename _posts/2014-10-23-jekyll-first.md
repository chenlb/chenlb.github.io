---
title: 一篇 jekyll github page 博客
layout: post
---

Here is my first *jekyll Markdown* page.

# H1

* list 1
* list 2

## 表格

| First Header | Second Header | Third Header |
| ------------ | ------------- | ------------ |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |

## 代码

```java
import java.net.InetAddress;
import java.net.UnknownHostException;

/**
 * 文档注释，打出本地 hostname
 */
public class EchoHostname {

	public static void main(String[] args) {
		//默认 UnknownHost
		String hostname = "UnknownHost";
		try {
			/*
				多行注释
			*/
			InetAddress addr = InetAddress.getLocalHost();
			hostname = addr.getHostName();
		} catch(UnknownHostException e) {}
		System.out.println(hostname);
	}
}
```

## python 代码

```python
#!/usr/bin/python2.6
import sys, getopt

def usage():
    print '''
    hello.py <option> <value>
    '''
print 'hello world!'
```
