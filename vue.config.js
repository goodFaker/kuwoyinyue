// vue.config.js
module.exports = {
    devServer: {
      // 代理
      proxy: {
        '/api': {
          target: 'http://localhost:3000', // 目标地址
          changeOrigin: true // 是否跨域
          // pathRewrite: {
          //   '^/api': '', // rewrite path
          // }
        }
      }
    }
  }