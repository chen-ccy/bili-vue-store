module.exports = {
  publicPath:'./',
  baseUrl : './',
  configureWebpack:{
    resolve:{
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
        'components': '@/components'
      }
    }
  }
}
