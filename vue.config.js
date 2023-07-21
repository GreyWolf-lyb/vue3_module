const { defineConfig } = require("@vue/cli-service");
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack') ;
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers') ;
const path = require('path') ;
// const { VueLoaderPlugin } = require('vue-loader') ;

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
  },
  configureWebpack: {
    // 入口
    entry: './src/main.ts',
    // 出口
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'thread-loader'
            },
            {
              loader: 'ts-loader',
              options: {
                happyPackMode: true
              }
            }
          ]
        },
      ],
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      extensions: [".vue",".ts", ".tsx", ".js"],
      modules: ["node_modules"],
      // 别名
      alias: {
        // '@': path.resolve('src')
      }
    },
  },
  css: {
    loaderOptions: {
      scss: {
        // sass 版本 9 中使用 additionalData 版本 8 中使用 prependData 旧版本中使用 data
        data: `@import "~@/assets/common/color_size.scss";
          @import "~@/assets/common/mixin.scss";`
      }
    }
  },
  lintOnSave: false,// 是否开启编译时是否不符合eslint提示
  publicPath: './', // 编译后的地址，可以根据环境进行设置
})