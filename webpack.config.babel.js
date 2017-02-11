/*import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';*/

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
    vendors: ['vue']
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
        test: /\.less/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
      components: path.join(__dirname, 'src/components'),
      lib: path.join(__dirname, 'src/lib')
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest']
    })
  ]
}