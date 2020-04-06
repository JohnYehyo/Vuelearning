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