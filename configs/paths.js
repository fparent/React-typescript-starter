const path = require('path')

module.exports = {
  appSrc: path.join(__dirname, '../src'),
  appHtml: path.join(__dirname, '../src', '/index.html'),
  build: path.join(__dirname, '../dist'),
  assets: path.join(__dirname, '../dist/assets')
}
