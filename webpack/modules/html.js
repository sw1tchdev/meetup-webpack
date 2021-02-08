const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { PROJECT_DIR } = require('../paths');

const injectHtml = () => ({
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(PROJECT_DIR, 'public/index.html'),
      filename: 'index.html',
      cache: false,
      minify: {
        collapseWhitespace: false,
      },
    }),
  ],
});

module.exports = {
  injectHtml,
};
