---
title: 一篇 jekyll github pages 博客
layout: post
---

了解和创建 github pages 可以从 [官方 github pages](https://pages.github.com/) 和 [pages help](https://help.github.com/categories/github-pages-basics/) 开始。

下面主要讲下功能点对应的配置。

## context

模板中使用 post 的内容不不是使用 page.context，这样不会把 md 格式的转成 html，原样办出。

应该直接使用 context

## 使用 github 的 GFM 解释 markdown

github 的 [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/) 支持三个 "`" 号且后面批定语言。那 jekyll 能支持 GFM 就最好了。

jekyll 官网使用说明，在 _config.yml 里配置。

```yml
kramdown:
	input: GFM
```

### 代码高亮

选择使用 [google-code-prettify 代码高亮](https://github.com/google/code-prettify)。参考 [highlight-of-jekyll](http://yansu.org/2013/04/22/highlight-of-jekyll.html) 的文章。

在代码模板如 default.html 里加上。把 google-code-prettify 放到 js 目录下。

```html
<link href="/js/google-code-prettify/prettify.css" rel="stylesheet">
<script src="/js/jquery-1.11.1.min.js"></script>
<script src="/js/google-code-prettify/prettify.js"></script>
<script type="text/javascript">
$(function(){
	$("pre").addClass("prettyprint linenums");
	prettyPrint();
});
</script>
```

### 如 Java 代码

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

### 如 python 代码

```python
#!/usr/bin/python2.6
import sys, getopt

def usage():
    print '''
    hello.py <option> <value>
    '''
print 'hello world!'
```

不喜欢 google-code-prettify 默认主题还可以其它选择，到 [Gallery of themes for code prettify]( http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html) 可以下载喜欢的主题。

关于 prettify 的行号处理。默认只有 5, 10, 15 ... 才有显示。可以找到 prettify.css 如下的注释掉。

```css
/*li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8 { list-style-type: none }*/
```

有了以上的代码及高亮处理，写技术 blog 使用 md 就很方便了。

## Mou 风格

平时也常用 mou，但 mou 它不支持 GFM。但它的字体及表格很好看。所以把 mou 的 md 转成 html，把它的 css 复制出来使用。

```html
<link href="/css/style-mou.css" rel="stylesheet">
```

## Atom

使用 Atom 来写 github pages 和 jekyll 的 md 格式 blog 不错。atom 支持 GFM 风格的高亮。

## jekyll

关于更多 jekyll 的使用请看 [官方文档](http://jekyllrb.com/docs/home/)
