const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const { utils, javascript, css } = require('../modules');

module.exports = () =>
  merge(
    webpackCommon(),
    {
      devtool: false,
      mode: 'production',
    },
    javascript.enableEslintChecker(),
    css.enableStyleLintChecker({
      files: 'src/**/*.(s(c|a)ss|css)',
    }),
    utils.optimizationCSS(),
    utils.optimization(),
  );
