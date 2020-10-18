# module-federation-demo

Module federation【模块联邦】简单使用 demo

### 介绍

模块联邦是webpack v5中提供的新特性，功能为在多个webpack构建的项目中共享模块等，官方介绍其是对【微前端】的一种解决方案。具体解读可以看[精读《Webpack5 新特性 - 模块联邦》](https://github.com/dt-fe/weekly/blob/v2/144.%E7%B2%BE%E8%AF%BB%E3%80%8AWebpack5%20%E6%96%B0%E7%89%B9%E6%80%A7%20-%20%E6%A8%A1%E5%9D%97%E8%81%94%E9%82%A6%E3%80%8B.md)

在我的理解中，其不仅仅能解决微前端的痛点，对于bundle less或其他方向同样有着启发性的思考。

例如，项目依赖包提前构建好之后直接上CDN，项目中通过模块联邦引入该资源，那么可以做的事情很大了...

或者，目前大多数可视化搭建项目的流程都是通过拖拽自己封装的组件生成页面DSL，然后经由服务端解析并构建，如果每次组件发布新版本后同时构建出符合模块联邦需求的包并上传到CDN，那样服务端在构建时是不是就不需要去安装依赖并且构建了呢？

### 快速开始

1. `yarn install`
2. `yarn run package-build`
3. `yarn run app-start`

packages: 用于封装及分享组件
app: 使用packages组件

### 简单使用实例

1. 按快速开始启动项目
2. 更改 packages 内的 text 文件（随意更改，包括样式、行为等，whatever...）
3. `yarn run package-build` 重新构建 packages
4. 刷新 app 页面，Text组件会随之更新

### TODO

1. shared配置，目前引入package无法使用app项目依赖的react包，按文档配置一直报错
2. 共享的组件必须动态引入，心智负担较大
