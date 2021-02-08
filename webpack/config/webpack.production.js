const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const { html } = require('../modules');

module.exports = (options) =>
  merge(
    webpackCommon(options),
    {
      devtool: false,
      mode: 'production',
    },
    html.injectHtml(false),
  );
