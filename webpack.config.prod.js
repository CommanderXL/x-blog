const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
};
const I18nPlugin = require('i18n-webpack-plugin');
const languages = {
  "en": null,
  "de": require('./src/de.json')
}


module.exports = Object.keys(languages).map(function(language) {
  return merge(require('./webpack.config.base'), {
   output: {
    path: PATHS.dist,
    publicPath: '/dist/',
    filename: `js/[name].${language}.[chunkhash:8].js`, // hash输出8位
    chunkFilename: `js/[name].${language}.[chunkhash:8].js`,
  },
  devtool: false,
  plugins: [
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      except: ['exports', 'require'] //避免关键字被混淆
    }),*/
    new I18nPlugin(languages[language])
  ] 
  })
})

/*module.exports = merge(require('./webpack.config.base'), {
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
})*/