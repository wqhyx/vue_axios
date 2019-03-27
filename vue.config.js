const goods = require('./data/posts.json')

module.exports = {
  baseUrl: '/',  //根路径
  outputDir: 'dist', //构建输出
  assetsDir: 'assets', //静态资源(js，css ,fonts)
  lintOnSave: false,   //是否开启eslint保险检测 有效值：true || false || 'error'
  devServer: {
    open: true,    //自启动
    host: 'localhost',  //ip(127.0.0.1)
    port: 8080,     //端口
    https: false,
    hotOnly: false,    //热更新(webpack 实现了热更新)
    proxy: {
      //配置跨域
      '/api': {
        target: 'http://localhost:5000/api/',
        ws: true,
        changeOrigin: true,   //是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before (app) {
      // http://localhost:8080/api/posts
      // 模拟 加载json数据
      app.get('/api/posts', (req, res) => {
        res.json(goods)
      })
    }
  }
}
