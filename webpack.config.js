const path = require('path');

// constants
const BUILD_FOLDER = path.resolve(__dirname, 'dist');

function getWebpackConfigByEnv(env) {
  switch (env) {
    case 'development':
      return require('./webpack/config/webpack.development');
    case 'production':
      return require('./webpack/config/webpack.production');
    default:
      return require('./webpack/config/webpack.development');
  }
}

const createConfig = getWebpackConfigByEnv(process.env.NODE_ENV);

module.exports = createConfig(BUILD_FOLDER);
