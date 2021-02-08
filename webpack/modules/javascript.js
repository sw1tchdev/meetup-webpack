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
        test: /\.js$/,
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

module.exports = {
  loadJS,
};
