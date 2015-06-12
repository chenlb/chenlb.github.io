---
layout: post
title: netty 连接示例
tags: [netty]
---

```java
public static Channel connect(Bootstrap bootstrap, SocketAddress serverAddress) throws NettyConnectLessException {
  ChannelFuture future = null;
  try {
    future = bootstrap.connect(serverAddress).sync();
  } catch (InterruptedException e) {
    throw new NettyConnectLessException("connect fail by InterruptedException, tcp=" + serverAddress);
  }

  // use bootstrap.option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 2000);
  // so await without timeout
  future.awaitUninterruptibly();

  assert future.isDone();

  if(future.isCancelled()) {
    // Connection attempt cancelled by user
    throw new NettyConnectLessException("connection cancelled by user tcp=" + serverAddress);
  } else if(!future.isSuccess()) {
    throw new NettyConnectLessException(future.cause().getMessage()+", tcp="+serverAddress, future.cause());
  } else {
    // Connection established successfully
    logger.info("connect remote server={} success", serverAddress);

    return future.channel();
  }
}
```

更详细请看 https://netty.io/4.0/api/io/netty/channel/ChannelFuture.html
