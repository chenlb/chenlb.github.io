---
layout: post
title: 点命中多边形
tags: [point,polygon]
---

## 点命中多边形

判断一个点 (x, y) 是否在多边形内，找到一个简单高效的算法 [http://alienryderflex.com/polygon/](http://alienryderflex.com/polygon/)

```java
package com.chenlb.polygon;

/**
 * 求点是否在多边形内.
 *
 * @author chenlb 2013-05-14 16:08:00
 */
public class PolygonUtils {

	/**
	 * 判断一个点 (x, y) 是否在多形型内。算法地址 http://alienryderflex.com/polygon/
	 *
	 * @param polyX 点的 x 系列
	 * @param polyY 点的 y 系列
	 * @param x 待判断的点 x
	 * @param y 待判断的点 y
	 * @return 是否在多边形型内
	 *
	 * @see 算法地址 http://alienryderflex.com/polygon/
	 *
	 * @author chenlb 2013-05-14 16:08:00
	 */
	public static boolean pointInPolygon(double[] polyX, double[] polyY, double x, double y) {
		int polySides = polyX.length;
		int i, j = polySides - 1;
		boolean oddNodes = false;

		for(i = 0; i < polySides; i++) {
			if((polyY[i] < y && polyY[j] >= y || polyY[j] < y && polyY[i] >= y) && (polyX[i] <= x || polyX[j] <= x)) {
				// ^= 比 if 快
				/*
				 * if(polyX[i] + (y - polyY[i]) / (polyY[j] - polyY[i]) * (polyX[j] - polyX[i]) < x)
				 * { oddNodes = !oddNodes; }
				 */
				oddNodes ^= (polyX[i] + (y - polyY[i]) / (polyY[j] - polyY[i]) * (polyX[j] - polyX[i]) < x);
			}
			j = i;
		}

		return oddNodes;
	}
}
```
