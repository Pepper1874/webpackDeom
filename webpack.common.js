const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: {
            import: path.resolve(__dirname, 'src', 'index.js'),
            dependOn: 'shared',
        },
        main: {
            import: path.resolve(__dirname, 'src', 'main.js'),
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin({
        //     dry: true,
        //     verbose: true,
        //     protectWebpackAssets: false,
        // }),
        new HtmlWebpackPlugin({
            title: 'Production Mode'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}