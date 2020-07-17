### 加载优化方案
（请求资源方面的）

1. 建议最好把html, css, js, font, img这些资源放在cdn上

2. 没钱买cdn => 尽量少加载外链 cs 和 js 代码（防止js阻塞）在头部增加 dns-prefetch（减少DNS解析）  
  rel = "dns-prefetch"

3. 不是在首屏展示的资源不要立即加载, onload 或者 首屏渲染完再加载（懒加载、数据延迟分批加载）

4. 减少http请求次数和请求资源的大小
  - 资源合并压缩
  - 字体图标 base64
  - 考虑资源合并请求

5. script标签加载脚本会阻塞浏览器主线程（JS线程和GUI渲染线程互斥） 考虑异步化
  - defer 页面渲染完成后执行js
  - async 

6. 缓存
  利用好缓存，http响应头缓存字段开启静态资源缓存，减少资源下载

  缓存位置有以下几种：
  - Service Worker 浏览器独立线程
  - Memory Cache 内存缓存
  - ClientCache 客户端缓存 本质上是硬盘缓存
  - HttpCache（请求头header包含各种缓存信息）




