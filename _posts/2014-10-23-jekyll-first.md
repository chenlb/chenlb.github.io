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

public class EchoHostname {

	public static void main(String[] args) {
		String hostname = "UnknownHost";
		try {
			InetAddress addr = InetAddress.getLocalHost();
			hostname = addr.getHostName();
		} catch(UnknownHostException e) {}
		System.out.println(hostname);
	}
}
```
