const { merge } = require('webpack-merge');
const path = require('path');
const { PROJECT_DIR } = require('../paths');
const { utils, javascript, html, copy, css } = require('../modules');

module.exports = () =>
  merge(
    {
      entry: './src/index.js',
      output: {
        filename: 'main.js',
        path: path.resolve(PROJECT_DIR, 'dist'),
      },
    },
    javascript.loadJS(),
    html.injectHtml(),
    copy.copyFiles([
      {
        from: `${PROJECT_DIR}/public/favicon.ico`,
        to: './favicon.ico',
      },
    ]),
    css.loadSCSS(),
    utils.optimizationCSS(),
    utils.cleanDist(),
    utils.progress(),
  );
