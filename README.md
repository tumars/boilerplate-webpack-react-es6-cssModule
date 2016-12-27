这是个主要使用 webpack + react + redux + es6 + cssModule 的 demo，包含 React 技术栈全家桶，可作为开发模板使用。

>webpack 的具体使用及优化可参考我的博文 [webpack 使用总结](http://www.ferecord.com/webpack-summary.html) 
>组件的使用开发可参考 [ActiUI](https://tumars.github.io/ActiUI/) (自己写的 react component 组件库，欢迎指导)

##主要功能特征
- 使用热加载，文件改变页面自动刷新
- 文件 Code Spliiting 按需加载
- 使用 DllPlugin 将依赖文件独立打包
- 使用 ESlint 检测 js
- less->css，autoprefixer
- 小于 8k 图片转化为 base64，图片压缩
- 文件压缩、添加 MD5
- 使用 Fetch，抛弃 Ajax

---------

####页面效果如下：

![demo](./demo.gif)


---------



## Requirements
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [webapck](https://webpack.github.io/)


## Usage
####安装
```
git clone https://github.com/tumars/boilerplate-webpack-react-es6-cssModule
cd boilerplate-webpack-react-es6-cssModule
npm install
```
####开始开发
```
//将 react、react-dom 单独打包
npm run dll
//启动服务器开始开发
npm start
```
####生产打包
```
npm run buil-win
```

####启动接口
本项目的接口数据通过 `json-server` 配置，需全局安装并启动：

```
npm i -g json-server
npm run mock
```

接口将会在本地 3003 端口启动


## Linting
本项目使用 ESlint，项目开发过程中会自动检测 js

也可手动检测：
```
npm run lint src
```

检测完毕会在命令行显示所有纠错提示


## Dependencies
- [React](https://github.com/facebook/react)
- [React-router](https://github.com/reactjs/react-router)
- [redux](https://github.com/reactjs/redux)
- [fetch](https://github.com/github/fetch)
- [postcss](https://github.com/postcss/postcss)
- [eslint](https://github.com/eslint/eslint)
- [babel-loader](https://github.com/babel/babel-loader)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)
