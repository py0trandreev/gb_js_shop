const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },


    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'GeekBrains Shop JS2',
            template: path.resolve(__dirname, './public/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public/style.css'),
                    to: path.resolve(__dirname, './dist')
                },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

        ],

    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),

        },
        compress: true,
        port: 9000,
        proxy: {
            '/api/v1': 'http://localhost:3000',
        },
    },


    mode: 'development',


}