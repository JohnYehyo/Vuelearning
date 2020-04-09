const path = require('path')
//导入生成预览页面的插件,得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')

//创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    //指定要用的模板文件
    template: './src/index.html',
    //指定生成的文件名称(改文件也在内存中不显示)
    filename: 'index.html'

})

const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    //所有第三方文件模块的匹配规则
    module:{
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.vue$/, use: ['vue-loader']}
        ]
    }
}