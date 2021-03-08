// vue.config.js
module.exports = {
  devServer: {
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:7171', // 目标地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '', // rewrite path
        },
      },
      '/online': {
        target: 'http://tph.cool/',
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 重写路径
          '^/online':'',
        },
      },
    },
  },
}
