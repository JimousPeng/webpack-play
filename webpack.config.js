const path = require('path');
module.exports = {
    // context可以让entry的编写更加简洁，尤其是多入口的情况下。context可以省略，默认值为当前工程的根目录。
    context: path.join(__dirname, './src/libs'), // 只能是 String 类型
    // entry: './index.js', // String Array Object Func 都可以
    entry: {
        index: './index.js',
        second: './test.js',
        app: './app.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
        // publicPath: '/dist/'
    },
    // module.rules 代表了模块的处理规则
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     use: 'eslint-loader',
            // },
            {
                // test: /\.css$/, // 正则或者正则数组
                use: ['style-loader','css-loader'], // webpack打包是按照数组从后往前的顺序将资源交给loader处理的，因此要把最后生效的放在前面。 字符串、数组，对象均可
                // exclude: /node_modules/, //node_modules中的模块不执行该条规则。该配置项通常是必加的，否则可能拖慢整个的打包速度。
                // include: /src/, // 只对匹配到的模块生效。exclude和include同时存在，exclude的优先级更高。
                resource: {
                    // resource -- 加载模块
                    test: /\.css$/, // 正则或者正则数组
                    exclude: /node_modules/,
                },
                issuer: {
                    // issuer -- 加载者
                    // 只让 /src 目录下的js可以引用css
                    test: /\.js$/,
                    include: /src/,
                    exclude: /node_modules/,
                }
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader', // babel通常属于对所有JS后缀文件设置的规则，所有需要
                    options: {
                        cachDirectory: true,
                        presets: [
                            [
                                'env', {
                                    modules: true,
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    mode: 'development',
    devServer: {
        publicPath: '/assets/',
        port: 3000
    }
}