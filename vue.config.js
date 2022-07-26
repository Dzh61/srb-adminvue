const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/admin': {
        target: 'http://localhost:8180',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/admin': ''}
      }
    }
  }
})