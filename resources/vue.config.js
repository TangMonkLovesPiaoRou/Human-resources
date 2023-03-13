const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { name } = require('./package.json')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

const port = process.env.port || 9816

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

const cdn = {
  js: [
    'http://localhost:3000/component/en.js',
    'http://localhost:3000/component/zh.js',
    'http://localhost:3000/language.js'
  ]
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: `//localhost:${port}`,
  devServer: {
    port: port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: ['.vue', '.ts', 'tsx', '.js', '.json', '.mjs']
    },
    plugins: [
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
      new PreloadWebpackPlugin({
        rel: 'preload',
        fileBlacklist: [/\.map$/, /runtime(.*)\.js$/],
        include: 'all'
      })
    ],
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    },
    externals: {
      language: 'Language'
    }
  },
  chainWebpack: (config) => {

    config.plugins.delete('prefetch')

    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        vue: {
          name: 'vue',
          test: /[\\/]node_modules[\\/]vue(.*)[\\/]/,
          chunks: 'initial',
          priority: 40
        },
        ElementPlus: {
          name: 'ElementPlus',
          test: /[\\/]node_modules[\\/]_?element-plus(.*)[\\/]/,
          chunks: 'initial',
          priority: 30
        },
        libs: {
          name: 'libs',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 20
        }
      }
    })

    config.optimization.runtimeChunk('single')
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })
  }
})
