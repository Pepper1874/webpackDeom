const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require(webpack);

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
        // print: path.resolve(__dirname, 'src', 'print.js'),
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        // contentBase: path.resolve(__dirname, 'dist'),
        static: path.resolve(__dirname, 'dist'),
        hot: true, // 开启热模块替换
    },
    plugins: [
        new CleanWebpackPlugin(), // 动态清除 dist 下无用的生成文件, 可扩展配置需要传入一个对象
        new HtmlWebpackPlugin({ // 动态的生成最终的 HTML 文件
            title: 'Output Management',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModulesReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/, // 正则匹配 css 文件
            use: [ // 使用以下 loader 处理 css 文件
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(png|gif|svg|jpg)$/, // 正则匹配图片文件
            use: [ // 使用以下 loader 处理图片文件
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/, // 正则匹配字体文件
            use: [ // 使用以下 loader 处理字体文件
                'file-loader'
            ]
        }, {
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
        }, {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
    },
}