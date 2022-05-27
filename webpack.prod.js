const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    // devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            // sourceMap: true,
        }),
        // // 以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common', // 指定公共 bundle 的名称
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'), // 使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        // extract common dependencies into an existing entry chunk or an entirely new chunk
        splitChunks: {
            chunks: 'all',
        },
    },
    mode: 'production',
})