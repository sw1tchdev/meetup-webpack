const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const loadSCSS = () => ({
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }, // postcss-loader
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

const enableStyleLintChecker = (options = {}) => ({
  plugins: [
    new StylelintWebpackPlugin({
      ...options,
    }),
  ],
});

module.exports = {
  loadSCSS,
  enableStyleLintChecker,
};
