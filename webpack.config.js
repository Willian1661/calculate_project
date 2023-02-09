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

  devServer:{
      hot: true,
      static: "./dist"
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    {
      test: /\.(sa|sc|c)ss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
    }),
  ],
};