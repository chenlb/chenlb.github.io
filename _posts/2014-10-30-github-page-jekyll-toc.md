---
layout: post
title: jekyll 在 github pages 使用 toc
tags: [toc, jekyll, github-pages]
---

博客文章里使用文章目录可以增加翻阅的方便性。由于使用了 jekyll 和 github pages，使用插件就不方便，要用 js 完成。

好在 jekyll 对 md 的标题加了 id。就可以锚连接过去。发现有个 [jekyll-table-of-contents](https://github.com/ghiculescu/jekyll-table-of-contents)

它对比其它 js 工具，可以 h1 到 h6 级。

## table of content

toc 就是 table of content

### jekyll-table-of-contents

使用 [jekyll-table-of-contents](https://github.com/ghiculescu/jekyll-table-of-contents) 简单。加入 toc.js 和 toc.css 使用 css。下载它们放到自己的项目结构里。

#### 引入 toc js css

在 default 模板里加入

```html
<link href="/css/toc.css" rel="stylesheet">
<script src="/js/toc.js"></script>
```

#### use toc

在 post 模板里加入。当然了它要依赖 jquery。

```html
<script type="text/javascript">
$(document).ready(function() {
    $('.toc').toc();
});
</script>
```

#### toc params

toc 还有参数指定，一些效果。当然可以看看 toc.js 的内容。

## toc 作用 post 区域的内容

使 toc 在指定的  post 内容下的 h1 .. h6 的标签才生效，可以修改 toc.js。如 post 用 div id=main_content 包括。

```js
//var headers = $('h1, h2, h3, h4, h5, h6').filter(function() {
var headers = $('#main_content h1, #main_content h2, #main_content h3, #main_content h4, #main_content h5, #main_content h6').filter(function() {
```
