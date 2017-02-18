const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
}

module.exports = merge(require('./webpack.config.base'), {
  output: {
    path: PATHS.dist,
    publicPath: '/dist/',
    filename: `js/[name].[chunkhash:8].js`, // hash输出8位
    chunkFilename: `js/[name].[chunkhash:8].js`,
  },
  devtool: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      except: ['exports', 'require'] //避免关键字被混淆
    })
  ]
})