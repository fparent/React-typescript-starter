const path = require('path')
const paths = {
  assets: path.join(__dirname, '../dist/assets'),
  appSrc: path.join(__dirname, '../src')
}

module.exports = function() {
  return {
    devtool: ' cheap-module-eval-source-map',
    context: paths.appSrc,
    entry: {
      app: ['./app.tsx']
    },
    output: {
      filename: '[chunkhash].bundle.js',
      path: paths.assets
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          loader: 'source-map-loader',
          enforce: 'pre',
          include: paths.appSrc
        }
      ]
    }
  }
}
