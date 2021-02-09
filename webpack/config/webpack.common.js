const { merge } = require('webpack-merge');
const path = require('path');
const { PROJECT_DIR } = require('../paths');
const { utils, javascript, html, css } = require('../modules');

module.exports = () =>
  merge(
    {
      entry: path.resolve(PROJECT_DIR, 'src/index.js'),
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(PROJECT_DIR, 'dist'),
      },
    },
    javascript.loadJS(),
    html.injectHtml(),
    css.loadSCSS(),
    utils.optimizationCSS(),
    utils.cleanDist(),
    utils.progress(),
  );
