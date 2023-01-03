const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
    entry:{
      bundle: './src/assets/javascript/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean: true,
  },
  plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/pages/index.html',
      }),
  ],
  devServer:{
      hot: true,
      static: "./dist"
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
 };