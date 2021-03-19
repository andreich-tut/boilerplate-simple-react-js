const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const dotenv = require('dotenv');

const styles = require('./webpack/styles');
const scripts = require('./webpack/scripts');
const files = require('./webpack/files');
const plugins = require('./webpack/plugins');

// this enable reading of .env
dotenv.config();

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  const IS_DEBUG = env && env.devDebug === 'true';

  return merge([
    {
      entry: './src/index.js',
      output: {
        path: '/build',
        filename: isDev ? 'app.[hash].js' : 'app.[contentHash].js',
      },
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
        noInfo: true,
        inline: true,
        port: process.env.DEV_SERVER_PORT,
        watchOptions: {
          ignored: /node_modules/,
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
      },
      optimization: {
        minimize: false,
      },
      devtool: isDev ? 'eval-source-map' : false,
      plugins: plugins(isDev, { IS_DEBUG }),
      performance: {
        hints: false,
        maxEntrypointSize: 2560000,
        maxAssetSize: 512000
      },
      stats: 'minimal',
    },
    scripts(),
    styles(isDev),
    files(),
  ]);
};
