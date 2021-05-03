module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // devServer: {
  //   proxy: 'http://api.ternakmart.id/',
  // }
  publicPath: process.env.NODE_ENV === 'production'
  ? '/internal/'
  : '/'
}
