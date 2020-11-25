module.exports = {
    runtimeCompiler: true,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '旭辉集团-HR项目管理',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    configureWebpack:{
        resolve:{
            alias:{
                "views":"@/views",
                "components":"@/components"
            }
        }
    },
    devServer: {
        proxy: {
            // 代理规则
            '/api': {
                // 代理的目标服务器地址,这个路径是我代理到服务器,即你要请求的第三方接口
                //develop
                target: 'http://10.129.37.221:8888/itpm',
                //prod
                //target: 'https://biboard.cifi.com.cn/api',
                // https请求需要该设置
                secure: false,
                // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                // 必须设置该项
                changeOrigin: true,
                // 将 '/api' 替换成 ''
                // 重写路径运行后就代理到对应的地址
                pathRewrite: { '^/api': '' }
            }
        }
    }
}
