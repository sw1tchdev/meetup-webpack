const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const loadJS = () => ({
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        exclude: (file) => /node_modules/.test(file) && !/@babel[/|\\]runtime/.test(file),
        options: {
          babelrc: false,
          sourceType: 'unambiguous',
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: '3.8',
              },
            ],
            '@babel/preset-typescript',
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                helpers: true,
              },
            ],
          ],
        },
      },
    ],
  },
});

const typeChecking = () => ({
  plugins: [new ForkTsCheckerWebpackPlugin()],
});

module.exports = {
  loadJS,
  typeChecking,
};
