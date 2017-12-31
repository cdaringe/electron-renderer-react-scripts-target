module.exports = function editWebpackConfig (webpackConfig) {
  // webpackConfig is the parsed JS webpack config from react-scrips.
  // modify it here synchronously, & return it.
  delete webpackConfig.node
  return Object.assign({}, webpackConfig, {
    target: 'electron-renderer'
  })
}
