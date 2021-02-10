const { merge } = require('webpack-merge');
const path = require('path');
const webpackCommon = require('./webpack.common');
const { PROJECT_DIR } = require('../paths');

module.exports = () =>
  merge(webpackCommon(), {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port: 9000,
      publicPath: '/',
      contentBase: path.join(PROJECT_DIR, 'dist'),
      watchContentBase: true,
      disableHostCheck: true,
      liveReload: true,
      injectClient: true,
    },
  });
