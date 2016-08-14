---
layout: post
title: hightcharts 使用 csv 数据源
tags: [hightcharts,csv]
---

## hightcharts 配置

data-line.html 文件内容

```html
<script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<script src="http://code.highcharts.com/modules/data.js"></script>

<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
<script>
$.get('data-line.csv', function(csv_data) {
    $('#container').highcharts({
        data: {
            csv: csv_data
        },
        title: {
            text: '月度平均温度',
        },
        subtitle: {
            text: '来源: WorldClimate.com',
        },
        yAxis: {
            title: {
                text: '温度 (°C)'
            }
        },
        tooltip: {
            valueSuffix: ' °C',
            shared: true,   //多个值同时显示
            crosshairs: true    //有线（区）显示
        }
    });
});
</script>
```

## csv 数据

data-line.csv

```
月份,东京,纽约,柏林,伦敦
1月,7.0,-0.2,-0.9,3.9
2月,6.9,0.8,0.6,4.2
3月,9.5,5.7,3.5,5.7
4月,14.5,11.3,8.4,8.5
5月,18.2,17.0,13.5,11.9
6月,21.5,22.0,17.0,15.2
7月,25.2,24.8,18.6,17.0
8月,26.5,24.1,17.9,16.6
9月,23.3,20.1,14.3,14.2
10月,18.3,14.1,9.0,10.3
11月,13.9,8.6,3.9,6.6
12月,9.6,2.5,1.0,4.8
```

## 参考资料

* [官方说明](http://www.highcharts.com/docs/working-with-data/data-module)
