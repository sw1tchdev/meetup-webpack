const { merge } = require('webpack-merge');
const { utils } = require('../modules');

module.exports = (buildFolder) =>
  merge(
    {
      entry: './src/index.js',
      output: {
        filename: 'main.js',
        path: buildFolder,
      },
    },
    utils.optimization(),
    utils.cleanDist(),
    utils.progress(),
  );
