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

## 6. 配置生成预览页面
- ### 运行命令安装生成预览页面的插件
```
    npm install html-webpack-plugin -D
```
- ### 在webpack.config.js文件头部添加以下信息:
```
//导入生成预览页面的插件,得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')

//创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    //指定要用的模板文件
    template: './src/index.html',
    //指定生成的文件名称(改文件也在内存中不显示)
    filename: 'index.html'

})
```
- ### 修改webpack.config.js向外暴露的配置对象,新增配置节点:
```
module.exports = {
    plugins: [htmlPlugin]
}
```
## 7. 配置自动打包
在package.json中增加以下配置
```
  "scripts": {
    "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8080"
  }
```
其中-- open是打包完成后自动打开浏览器页面, --host和--port分别是要打开的地址和端口

## 8. webpack中加载器的基本使用

* ### 通过loader打包非js模块

webpack默认只能处理以.js后缀名结尾的模块,所以需要处理其它类型的文件需要使用loader加载器

- #### 打包处理css文件

运行命令安装处理css的loader

```
npm install style-loader css-loader -D
```

在webpack.config.js的module中添加匹配规则

```
//所有第三方文件模块的匹配规则
    module:{
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
```



- #### 打包处理less文件

- #### 打包处理scss文件

- #### 配置postCSS自动添加css的兼容

- #### 打包样式表中的图片和字体文件

- #### 打包处理js文件中的高级语法

