const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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

const optimizationCSS = () => ({
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
});

const progress = () => ({
  plugins: [new webpack.ProgressPlugin()],
});

const cleanDist = () => ({
  plugins: [new CleanWebpackPlugin()],
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
  optimizationCSS,
  splitChunks,
  analyzer,
};
