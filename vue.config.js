module.exports = {
    publicPath:'./',
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
