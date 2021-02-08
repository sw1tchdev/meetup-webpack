const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = (buildFolder) =>
  merge(webpackCommon(buildFolder), {
    devtool: 'source-map',
    mode: 'development',
  });
