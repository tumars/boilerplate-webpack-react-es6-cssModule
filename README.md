这是个主要使用 webpack + react + redux + es6 + cssModule 的 demo，可作为开发模板使用。

---------
效果如下：
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
####开发
```
npm start
```
####打包
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


## Dependencies
- [React](https://github.com/facebook/react)
- [React-router](https://github.com/reactjs/react-router)
- [redux](https://github.com/reactjs/redux)
- [fetch](https://github.com/github/fetch)
- [postcss](https://github.com/postcss/postcss)
- [eslint](https://github.com/eslint/eslint)
- [babel-loader](https://github.com/babel/babel-loader)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)
