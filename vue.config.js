module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'                     //use '/' for server and '' for local machine
    : '/',                   // use '/example/' for serving from different folder
  assetsDir: '',
  productionSourceMap: false,
  filenameHashing: true
}
