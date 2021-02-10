const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const { utils, javascript } = require('../modules');

module.exports = () =>
  merge(
    webpackCommon(),
    {
      devtool: false,
      mode: 'production',
    },
    javascript.enableEslintChecker(),
    utils.optimizationCSS(),
    utils.optimization(),
  );
