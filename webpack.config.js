const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, 'src/public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js'),
  ],
  devtool: 'eval',
  module: {
    loaders: [
      { test: /\.jsx?$/, include: path.resolve(__dirname, 'src'), loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
