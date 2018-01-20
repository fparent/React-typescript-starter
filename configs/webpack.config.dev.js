// const webpackMerge = require('webpack-merge')
// const webpackConfigBase = require('./webpack.config.base.js')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const paths = require('./paths')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  entry: {
    app: paths.appSrc + '/app.tsx'
  },
  output: {
    filename: 'bundle.js',
    path: paths.assets,
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: 'source-map-loader',
        enforce: 'pre',
        include: paths.appSrc
      },
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            include: paths.appSrc,
            use: [
              {
                loader: 'awesome-typescript-loader'
              }
            ],
            exclude: /node_modules/
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  // Dev server config
  devServer: {
    contentBase: paths.build,
    port: 8080
  },
  plugins: [
    // Generates an `index.html` file with <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin()
  ]
}
