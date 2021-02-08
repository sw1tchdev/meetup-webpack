const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loadSCSS = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
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

module.exports = {
  loadSCSS,
};
