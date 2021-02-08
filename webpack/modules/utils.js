const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const optimization = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
});

const progress = () => ({
  plugins: [new webpack.ProgressPlugin({ percentBy: 'entries' })],
});

const cleanDist = () => ({
  plugins: [new CleanWebpackPlugin()],
});

module.exports = {
  optimization,
  progress,
  cleanDist,
};
