const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production' ? '/static/dist/' : 'http://localhost:8080',
  outputDir: '../backend/static/dist',
  indexPath:  '../../templates/index.html',

  devServer: {
      devMiddleware: {
        writeToDisk: filePath => filePath.endsWith("index.html"),
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        publicPath: 'http://localhost:8080',
      },
      hot: 'only',
  }
})
