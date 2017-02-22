## 个人博客
  这是一个开源的个人`blog`项目.主要目的是玩一玩`vue`。大家可以在本项目中不仅仅可以学习了解以下的`框架/库`，同时还可以了解关于`代码结构组织`,`模块化`,`前端构建`等内容。这个项目才刚开始，我会带着大家完成整个`blog`项目的开发工作。

## 技术栈

前端
* es6
* vue2
* webpack2
* vue-router2
* axios
* less

后端
* node
* mongoDB


## 起手式

```javascript
  node -v
  v6.9.2

  npm -v
  3.10.9
```

```javascript
  1. fork本项目

  2. git clone ...

  3. cd x-blog

  4. npm install （建议使用淘宝镜像）
  
  5. npm run dev

  6. 浏览器打开 localhost:3000/pages
```

## 交流

* 有任何问题可以在这里提`issue`
* 可以加入QQ群: 473540115. 暗号是: x-blog 


some tips:

* 未接入后端前,前端使用`mock`数据

## 更新日志

### 2.14更新

完成`post`静态页面原型,修复`webpack`使用`extractTextPlugin`的正确姿势

### 2.15更新

添加`about`静态页面

### 2.16更新

* 添加`json-server`. [使用方法请戳我](https://github.com/typicode/json-server)

主要作用就是在你开发环节在后端同学还未开发完成的情况下，提供一个`mock backend server`。 

在我们还未开始写后端代码前，主要用这个`backend server`去模拟数据格式。

PS: 因为你`webpack-dev-server`占用了一个端口,那么`json-server`需要使用另外一个端口。
这个时候需要利用`webpack-dev-server`提供的`proxy`功能。

具体的配置信息，见`webpack.config.dev.js`文件

* 添加`axios`作为`http`资源库

其实`vue`对于开发者使用什么资源库没做什么限制。使用你顺手的就好了。

将`axios`集成进`vue`的方式见`App.vue`文件。

[axios文档请戳我](https://github.com/mzabriskie/axios)

[vue添加插件的方法请戳我](https://cn.vuejs.org/v2/guide/plugins.html)

### 2.18更新

* 添加`webpack`生产环境配置信息

见`webpack.config.prod.js`文件。主要添加的内容为文件的`hash`，文件的打包及输出内容

* `tags`页面添加`vue-router`路由动态匹配

[使用方法请戳我](http://router.vuejs.org/zh-cn/essentials/dynamic-matching.html)

### 2.19更新

* 添加mock数据, 见`lib/mock/db.json`文件
* 完成`archive`静态页面


### 最近这2天有点忙，server端从周四开始更新，望大家理解
