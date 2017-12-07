var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/js/Main',
  output: {
    path: path.resolve(__dirname, 'bin/js'),
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [
            'babel-plugin-transform-private-properties',
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-strict-mode'
          ]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['bin'], {
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Iniciando projeto Javascript',
      filename: '../index.html',
      inject: 'head',
      minify: {
        collapseWhitespace: true
      }
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 9000,
      server: {
        baseDir: ['./bin']
      }
    })
  ],
  watch: true
}
