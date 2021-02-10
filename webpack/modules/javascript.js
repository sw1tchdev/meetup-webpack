const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// const { dependencies } = require('../../package.json');

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
        exclude: /node_modules/,
        // exclude: file => {
        //   const filteredDependencies = Object.keys(dependencies)
        //     .filter((value) => !value.includes('core-js'))
        //     .map((value) => `node_modules/${value}`);
        //   return /node_modules/.test(file) && !filteredDependencies.some((value) => file.includes(value));
        // },
        options: {
          babelrc: false,
          // sourceType: 'unambiguous',
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'entry',
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

const enableEslintChecker = (options = {}) => ({
  plugins: [
    new ESLintPlugin({
      ...options,
    }),
  ],
});

module.exports = {
  loadJS,
  typeChecking,
  enableEslintChecker,
};
