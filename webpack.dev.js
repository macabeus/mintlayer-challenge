const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    proxy: {
      '/api/**': {
        target: 'https://api-pub.bitfinex.com/v2/',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
})
