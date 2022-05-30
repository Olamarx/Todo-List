/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      bundle: path.resolve(__dirname, 'src/index.js'),
    },
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          filename: 'index.html',
          template: './src/template.html',
        }),
      ],
    output: {
      path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    // optimization: {
    //     runtimeChunk: 'single',
    //   },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
};