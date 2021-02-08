const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = (buildFolder) =>
  merge(webpackCommon(buildFolder), {
    devtool: false,
    mode: 'production',
  });
