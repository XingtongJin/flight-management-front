const { defineConfig } = require('@vue/cli-service')
const baseUrl = 'http://127.0.0.1:8080'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
        proxy: {
            // //配置跨域
            [""]: {
                target: baseUrl, // 接口的域名
                // ws: true, // 是否启用websockets
                changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    },
})
