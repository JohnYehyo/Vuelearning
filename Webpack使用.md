# Webpack使用

## 1.  安装webpack及webpack-cli

```
npm install webpack webpack-cli -D
```

## 2. 在项目根目录创建名为webpack.config.js的配置文件

## 3. 初始化如下基本配置

```
module.exports = {
    //编译模式(development、production)
    mode: 'development',
}
```
tips: 这时别忘了index.html中引用的index.js变为main.js(index会提示模块找不到,使用webpack就是我为了解决该问题,引用改为webpack打包后输出的main.js)

## 4. 配置打包的入口和出口

```
const path = require('path')

module.exports = {
    //编译模式(development、production)
    mode: 'development',
    //打包的入口文件
    entry: path.join(__dirname, './src/index.js'),
    output:{
        //输出文件存放路径
        path: path.join(__dirname, './dist'),
        //输出文件的名称
        filename: 'bundle.js'
    }
}
```

> tips: 这时别忘了index.html中引用的main.js变为bundle.js

## 5. webpack的自动打包功能

- ### 安装项目打包工具

```
npm i webpack-dev-server -D
```
- ### 修改package.json中script的dev:

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server"
  },
```
- ### 将index.html中bundle.js的引用路径改为"/bundle.js"(localhost:8080中看不到但是访问localhost:8080/bundle.js能访问到  这是因为webpack打包生成的输出文件默认放到了系统根目录中并且是虚拟的)
- ### 重新打包:
```
npm run dev
```

- ### 访问<http://localhost:8080/>查看