const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
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
    }
}