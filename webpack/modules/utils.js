const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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

const splitChunks = () => ({
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

const progress = () => ({
  plugins: [new webpack.ProgressPlugin()],
});

const cleanDist = () => ({
  output: {
    clean: true,
  },
});

const analyzer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      analyzerPort: 'auto',
    }),
  ],
});

module.exports = {
  optimization,
  progress,
  cleanDist,
  splitChunks,
  analyzer,
};
