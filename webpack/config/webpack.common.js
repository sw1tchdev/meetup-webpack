const { merge } = require('webpack-merge');
const path = require('path');
const { PROJECT_DIR } = require('../paths');
const { utils, javascript, html, css, assets } = require('../modules');

module.exports = () =>
  merge(
    {
      entry: path.resolve(PROJECT_DIR, 'src/index.js'),
      output: {
        assetModuleFilename: 'assets/[name].[hash][ext]',
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(PROJECT_DIR, 'dist'),
      },
      resolve: {
        extensions: ['.js', '.json', '.ts'],
      },
      cache: {
        type: 'filesystem',
      },
    },
    javascript.loadJS(),
    javascript.typeChecking(),
    html.injectHtml(),
    css.loadSCSS(),
    assets.loadResources(),
    assets.loadInline(),
    utils.cleanDist(),
    utils.progress(),
    utils.splitChunks(),
    // {
    //   plugins: [
    //     new (class MyCustomPlugin {
    //       // eslint-disable-next-line class-methods-use-this
    //       apply(compiler) {
    //         compiler.hooks.done.tap('MyCustomPlugin', (stats) => {
    //           debugger;
    //         });
    //       }
    //     })(),
    //   ],
    // },
  );
