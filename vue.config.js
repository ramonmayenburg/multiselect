module.exports = {
  devServer: {
    proxy: 'http://localhost:8080'
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/css/main.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/multiselect/'
  : '/'
};