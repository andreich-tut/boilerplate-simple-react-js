const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (isDev, buildEnv) => {
  let plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'process.env': { ...buildEnv },
    }),
    new DotenvWebpack(),
  ];

  if (buildEnv.IS_DEBUG) {
    plugins = plugins.concat([
      new BundleAnalyzerPlugin()
    ]);
  }

  if (!isDev) {
    plugins = plugins.concat([
      new MiniCssExtractPlugin({
        filename: 'app.[contentHash].css',
      }),
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          ecma: 10,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        },
        extractComments: false,
      }),
      new CompressionPlugin({
        test: /\.js$|\.css$/,
        threshold: 10240,
        minRatio: 0,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './public/robots.txt',
            to: './robots.txt'
          },
          {
            from: './public/robots.staging.txt',
            to: './robots.staging.txt'
          },
          {
            from: './public/robots.production.txt',
            to: './robots.production.txt'
          },
          {
            from: './public/static',
            to: './static'
          }
        ]
      })
    ]);
  }

  return plugins;
};
