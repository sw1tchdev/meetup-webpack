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
      static: {
        directory: path.join(PROJECT_DIR, 'public'),
        publicPath: '/',
      },
      allowedHosts: 'all',
      hot: false,
      liveReload: true,
      client: true,
    },
  });
