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
    app: './src/main.js',           // 整个SPA的入口文件, 一切的文件依赖关系从它开始
    vendors: ['vue', 'vue-router']  // 需要进行单独打包的文件
  },
  output: {
    path: PATHS.dist,
    filename: 'js/[name].js',
    publicPath: '/dist/',           // 部署文件 相对于根路由
    chunkFilename: 'js/[name].js'   // chunk文件输出的文件名称 具体格式见webpack文档, 注意区分 hash/chunkhash/contenthash 等内容, 以及存在的潜在的坑
  },
  devtool: '#eval-source-map',      // 开始source-map. 具体的不同配置信息见webpack文档
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
        loader: 'url-loader?limit=10240&name=images/[name].[ext]'
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
      'components': path.join(__dirname, 'src/components'),   // 定义文件路径， 加速打包过程中webpack路径查找过程
      'lib': path.join(__dirname, 'src/lib'),
      'less': path.join(__dirname, 'src/less')
    },
    extensions: ['.js', '.less', '.vue', '*', '.json']        // 可以不加后缀, 直接使用 import xx from 'xx' 的语法
  },
  plugins: [
    new HtmlWebpackPlugin({                                   // html模板输出插件
      title: 'XRene Personal Blog',
      template: `${PATHS.dist}/template/index.ejs`,
      inject: 'body',
      filename: `${PATHS.dist}/pages/index.html`
    }),
    new ExtractTextPlugin({                                   // css抽离插件,单独放到一个style文件当中.
      filename: `css/style.css`,
      allChunks: true,
      disable: false
    }),
    // 将vue等框架/库进行单独打包, 并输入到vendors.js文件当中
    // 这个地方commonChunkPlugin一共会输出2个文件, 第二个文件是webpack的runtime文件
    // runtime文件用以定义一些webpack提供的全局函数及需要异步加载的chunk文件
    // 具体的内容可以看我写的blog 
    // [webpack分包及异步加载套路](https://segmentfault.com/a/1190000007962830)
    // [webpack2异步加载套路](https://segmentfault.com/a/1190000008279471)
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest']
    })
  ]
}