const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    }

    // proxy: 'http://localhost:9999'
  }
})