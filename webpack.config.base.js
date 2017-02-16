const webpack = require('webpack');
const path = require("path");
const fs = require("fs");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
}

module.exports = {
  entry: {
    app: './src/main.js',
    //vendors: ['vue', 'vue-router']
  },
  output: {
    path: PATHS.dist,
    filename: 'js/[name].js',
    publicPath: '/dist/',
    chunkFilename: 'js/[name].js'
  },
  devtool: '#eval-source-map',
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'components': path.join(__dirname, 'src/components'),
      'lib': path.join(__dirname, 'src/lib'),
      'less': path.join(__dirname, 'src/less')
    },
    extensions: ['.js', '.less', '.vue', '*', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'XRene Personal Blog',
      template: `${PATHS.dist}/template/index.ejs`,
      inject: 'body',
      filename: `${PATHS.dist}/pages/index.html`
    }),
    new ExtractTextPlugin({
      filename: `${PATHS.dist}/css/style.css`,
      allChunks: true,
      disable: false
    }),
    /*new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest']
    })*/
  ]
}