http://segmentfault.com/blog/gucheen/1190000000603336
监视程序

http://www.cnblogs.com/ywang1724/p/3917085.html
http://www.cnblogs.com/pigtail/archive/2013/01/08/2851056.html
http://www.jbxue.com/node_js/28081.htm

##1.监听程序变动 nodemon
http://segmentfault.com/blog/gucheen/1190000000603336
http://blog.csdn.net/u013758116/article/details/38982325
我听从了上面的方法，放弃了 从 /bin/www启动模块，而使用 app.js启动

--也有人推荐 pm2，我考虑现阶段不用功能太强，没有用。
http://se77en.cc/2013/06/27/goodbye-node-forever-hello-pm2-translation/

##2.路由规则
路由规则

express 封装了多种 http 请求方式，我们主要只使用 get 和 post 两种，即 app.get() 和 app.post() 。

app.get() 和 app.post() 的第一个参数都为请求的路径，第二个参数为处理请求的回调函数，回调函数有两个参数分别是 req 和 res，代表请求信息和响应信息 。路径请求及对应的获取路径有以下几种形式：

req.query： 处理 get 请求，获取 get 请求参数
req.params： 处理 /:xxx 形式的 get 或 post 请求，获取请求参数
req.body： 处理 post 请求，获取 post 请求体
req.param()： 处理 get 和 post 请求，但查找优先级由高到低为 req.params→req.body→req.query

