const path = require('path');

module.exports = () => {
  const importLoaderShimRegexp = new RegExp(path.join(
    process.cwd(),
    'node_modules/vfile/core.js',
  ));

  return {
    module: {
      rules: [
        {
          test: importLoaderShimRegexp,
          use: [{
            loader: 'imports-loader',
            options: {
              type: 'commonjs',
              imports: ['single process/browser process'],
            },
          }],
        },
        {
          enforce: 'pre',
          test: /(\.jsx?|\.tsx?)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /(\.jsx?|\.tsx?)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    }
  };
};
