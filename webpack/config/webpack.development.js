const { merge } = require('webpack-merge');
const path = require('path');
const webpackCommon = require('./webpack.common');
const { PROJECT_DIR } = require('../paths');

module.exports = (options) =>
  merge(webpackCommon(options), {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port: 9000,
      publicPath: '/',
      contentBase: path.join(PROJECT_DIR, 'dist'),
      watchContentBase: true,
      https: true,
      disableHostCheck: true,
      liveReload: true,
      injectClient: (compilerConfig) => compilerConfig.target === 'browserslist',
    },
  });
